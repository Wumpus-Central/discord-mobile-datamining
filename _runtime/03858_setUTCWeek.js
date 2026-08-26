// === Module 3858: setUTCWeek ===

// Module 3858 (setUTCWeek)
import toInteger from "toInteger" /* 3544 */;
import _typeof from "_typeof" /* 3540 */;
import getUTCWeek from "getUTCWeek" /* 3780 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!getUTCWeek) {
  obj = { default: null };
  obj[0] = getUTCWeek;
  let tmp7 = obj;
} else {
  tmp7 = getUTCWeek;
}
getUTCWeek = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = getUTCWeek.default(defaultResult1, arg2) - toInteger.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;