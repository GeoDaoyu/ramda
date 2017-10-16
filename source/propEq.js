import _curry3 from './internal/_curry3';
import equals from './equals';


/**
 * 如果指定对象属性与给定的值相等，则返回 `true` ；否则返回 `false` 。通过 [`R.equals`](#equals) 函数进行相等性判断。可以使用 [`R.whereEq`](#whereEq) 进行多个属性的相等性判断。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});
export default propEq;