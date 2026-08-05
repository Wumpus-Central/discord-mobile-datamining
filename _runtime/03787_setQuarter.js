// _runtime/03787_setQuarter.js
import toInteger from "toInteger";
import _typeof from "_typeof";
import setMonth from "setMonth";
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
if (!setMonth) {
  obj = { default: null };
  obj[0] = setMonth;
  let tmp7 = obj;
} else {
  tmp7 = setMonth;
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

export default function setQuarter(arg0, arg1) {
  tmp9.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const diff = tmp3.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return tmp7.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;