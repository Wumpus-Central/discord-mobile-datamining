// _runtime/03616_getUTCISOWeek.js
import _typeof from "_typeof";
import startOfUTCISOWeek from "startOfUTCISOWeek";
import startOfUTCISOWeekYear from "startOfUTCISOWeekYear";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
let closure_1 = tmp5;
if (!startOfUTCISOWeekYear) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCISOWeekYear;
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

export default function getUTCISOWeek(arg0) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = tmp5.default(defaultResult1).getTime();
  const defaultResult2 = tmp5.default(defaultResult1);
  return Math.round((time - tmp7.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;