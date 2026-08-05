// _runtime/03753_setISODay.js
import toInteger from "toInteger";
import _typeof from "_typeof";
import addDays from "addDays";
import getISODay from "getISODay";
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
if (!addDays) {
  obj = { default: null };
  obj[0] = addDays;
  let tmp7 = obj;
} else {
  tmp7 = addDays;
}
let obj1 = tmp7;
if (!getISODay) {
  obj1 = { default: null };
  obj1[0] = getISODay;
  let tmp9 = obj1;
} else {
  tmp9 = getISODay;
}
let c3 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
let c4 = tmp11;

export default function setISODay(arg0, arg1) {
  tmp11.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  return tmp7.default(defaultResult1, tmp3.default(arg1) - tmp9.default(defaultResult1));
};
export default exports.default;