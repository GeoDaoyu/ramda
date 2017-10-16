import _curry1 from './internal/_curry1';


/**
 * 将一个对象的属性转换成键、值二元组类型的数组，包括原型链上的属性。注意，不同 JS 运行环境输出数组的顺序可能不一致。
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj 需要转换的对象
 * @return {Array} 对所有属性和原型链上属性转换后的键值对数组
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
export default toPairsIn;