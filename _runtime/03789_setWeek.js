import getWeek from "getWeek";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

if (!getWeek) {
  let obj = { default: null };
  obj[0] = getWeek;
  let tmp3 = obj;
} else {
  tmp3 = getWeek;
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
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
let obj1 = tmp7;
if (!toInteger) {
  obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
} else {
  tmp9 = toInteger;
}
let c3 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const diff = tmp3.default(defaultResult1, arg2) - tmp9.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;