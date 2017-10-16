import _curry3 from './internal/_curry3';
import adjust from './adjust';
import always from './always';


/**
 * 替换数组中指定索引处的值。
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx 需要修改的位置
 * @param {*} x 在返回数组中修改时需要使用的值
 * @param {Array|Arguments} list 需要被修改的类数组对象
 * @return {Array} 第`index`个位置用`x` 替换后的 `list` 的拷贝
 * @see R.adjust
 * @example
 *
 *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
 *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});
export default update;