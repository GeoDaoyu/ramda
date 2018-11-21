import _curry1 from './internal/_curry1';
import apply from './apply';
import curryN from './curryN';
import max from './max';
import pluck from './pluck';
import reduce from './reduce';
import keys from './keys';
import values from './values';

// Use custom mapValues function to avoid issues with specs that include a "map" key and R.map
// delegating calls to .map
function mapValues(fn, obj) {
  return keys(obj).reduce(function(acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}

/**
 * 接受一个属性值为函数的对象，返回一个能生成相同结构对象的函数。返回的函数使用传入的参数调用对象的每个属性位对应的函数，来生成相应属性的值。
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      const getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = _curry1(function applySpec(spec) {
  spec = mapValues(
    function(v) { return typeof v == 'function' ? v : applySpec(v); },
    spec
  );

  return curryN(
    reduce(max, 0, pluck('length', values(spec))),
    function() {
      var args = arguments;
      return mapValues(function(f) { return apply(f, args); }, spec);
    });
});
export default applySpec;
