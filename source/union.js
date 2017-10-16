import _concat from './internal/_concat';
import _curry2 from './internal/_curry2';
import compose from './compose';
import uniq from './uniq';


/**
 * 集合并运算，合并两个列表为新列表（新列表中无重复元素）。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as 第1个列表
 * @param {Array} bs 第2个列表
 * @return {Array} 两个列表拼接后去重的列表
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = _curry2(compose(uniq, _concat));
export default union;
