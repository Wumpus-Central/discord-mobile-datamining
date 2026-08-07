// _runtime/03579_isLastDayOfMonth.js
import _typeof from "_typeof";
import endOfDay from "endOfDay";
import endOfMonth from "endOfMonth";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!endOfDay) {
  obj = { default: null };
  obj[0] = endOfDay;
  let tmp5 = obj;
} else {
  tmp5 = endOfDay;
}
let closure_1 = tmp5;
if (!endOfMonth) {
  obj = { default: null };
  obj[0] = endOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = endOfMonth;
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

export default function isLastDayOfMonth(arg0) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = tmp5.default(defaultResult1).getTime();
  const defaultResult2 = tmp5.default(defaultResult1);
  return time === tmp7.default(defaultResult1).getTime();
};
export default exports.default;