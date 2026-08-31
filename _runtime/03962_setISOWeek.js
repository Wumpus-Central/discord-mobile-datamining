// _runtime/03962_setISOWeek.js
import toInteger from "03546_toInteger.js";
import _typeof from "metro/03542__typeof.js";
import getISOWeek from "03814_getISOWeek.js";
import requiredArgs from "03543_requiredArgs.js";

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
if (!getISOWeek) {
  obj = { default: null };
  obj[0] = getISOWeek;
  let tmp7 = obj;
} else {
  tmp7 = getISOWeek;
}
getISOWeek = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = getISOWeek.default(defaultResult1) - toInteger.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;