// _runtime/03692_setISOWeek.js
import toInteger from "toInteger";
import _typeof from "_typeof";
import getISOWeek from "getISOWeek";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let closure_1 = tmp5;
if (!getISOWeek) {
  obj = { default: null };
  obj[0] = getISOWeek;
  let tmp7 = obj;
} else {
  tmp7 = getISOWeek;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function setISOWeek(arg0, arg1) {
  tmp9.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const diff = tmp7.default(defaultResult1) - tmp3.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;