// === Module 3965: setWeek ===

// Module 3965 (setWeek)
import getWeek from "getWeek" /* 3821 */;
import _typeof from "_typeof" /* 3540 */;
import requiredArgs from "requiredArgs" /* 3541 */;
import toInteger from "toInteger" /* 3544 */;

if (!getWeek) {
  let obj = { default: null };
  obj[0] = getWeek;
  let tmp3 = obj;
} else {
  tmp3 = getWeek;
}
getWeek = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
if (!toInteger) {
  const obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = getWeek.default(defaultResult1, arg2) - toInteger.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;