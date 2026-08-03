import toInteger from "toInteger";
import _typeof from "_typeof";
import getDaysInMonth from "getDaysInMonth";
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
if (!getDaysInMonth) {
  obj = { default: null };
  obj[0] = getDaysInMonth;
  let tmp7 = obj;
} else {
  tmp7 = getDaysInMonth;
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

export default function setMonth(arg0, arg1) {
  tmp9.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const defaultResult2 = tmp3.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), tmp7.default(date1)));
  return defaultResult1;
};
export default exports.default;