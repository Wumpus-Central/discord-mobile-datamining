// _runtime/03661_getWeek.js
import startOfWeek from "startOfWeek";
import startOfWeekYear from "startOfWeekYear";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
let c0 = tmp3;
if (!startOfWeekYear) {
  obj = { default: null };
  obj[0] = startOfWeekYear;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeekYear;
}
let closure_1 = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
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
let c4 = 604800000;

export default function getWeek(arg0, arg1) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp7.default(arg0);
  const time = tmp3.default(defaultResult1, arg1).getTime();
  const defaultResult2 = tmp3.default(defaultResult1, arg1);
  return Math.round((time - tmp5.default(defaultResult1, arg1).getTime()) / c4) + 1;
};
export default exports.default;