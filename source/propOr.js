import _curry3 from './internal/_curry3';
import _has from './internal/_has';


/**
 * 对于给定的非空对象，如果指定属性存在，则返回该属性值；否则返回给定的默认值。
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});
export default propOr;