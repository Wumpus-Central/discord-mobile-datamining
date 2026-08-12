// _runtime/03712_getISOWeek.js
import _typeof from "_typeof";
import startOfISOWeek from "startOfISOWeek";
import startOfISOWeekYear from "startOfISOWeekYear";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!startOfISOWeek) {
  obj = { default: null };
  obj[0] = startOfISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
let closure_1 = tmp5;
if (!startOfISOWeekYear) {
  obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfISOWeekYear;
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

export default function getISOWeek(arg0) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = tmp5.default(defaultResult1).getTime();
  const defaultResult2 = tmp5.default(defaultResult1);
  return Math.round((time - tmp7.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;