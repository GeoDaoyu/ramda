import _arity from './internal/_arity';
import _curry2 from './internal/_curry2';
import head from './head';
import _reduce from './internal/_reduce';
import tail from './tail';
import identity from './identity';


/**
 * 利用转换函数从左往右执行函数组合。最右侧函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。 *
 * **注意：**pipe 输出的函数不会自动进行柯里化。
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeWith, R.pipe
 * @example
 *
 *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 *      const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, f(g, ...args)))
 */
var pipeWith = _curry2(function pipeWith(xf, list) {
  if (list.length <= 0) {
    return identity;
  }

  const headList = head(list);
  const tailList = tail(list);

  return _arity(headList.length, function() {
    return _reduce(
      function(result, f) {
        return xf.call(this, f, result);
      },
      headList.apply(this, arguments),
      tailList
    );
  });
});
export default pipeWith;