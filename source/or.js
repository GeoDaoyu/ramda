import _curry2 from './internal/_curry2';


/**
 * 逻辑或运算，
 *
 * 只要有一个参数为 `truth-y`，就返回 `true`；否则返回 `false`。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = _curry2(function or(a, b) {
  return a || b;
});
export default or;
