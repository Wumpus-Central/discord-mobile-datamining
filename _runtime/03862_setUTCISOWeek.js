// === Module 3862: setUTCISOWeek ===

// Module 3862 (setUTCISOWeek)
import toInteger from "toInteger" /* 3546 */;
import _typeof from "_typeof" /* 3542 */;
import getUTCISOWeek from "getUTCISOWeek" /* 3778 */;
import requiredArgs from "requiredArgs" /* 3543 */;

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
if (!getUTCISOWeek) {
  obj = { default: null };
  obj[0] = getUTCISOWeek;
  let tmp7 = obj;
} else {
  tmp7 = getUTCISOWeek;
}
getUTCISOWeek = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = getUTCISOWeek.default(defaultResult1) - toInteger.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;