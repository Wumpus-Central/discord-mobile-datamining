// _runtime/03604_getUTCWeek.js
import _typeof from "_typeof";
import startOfUTCWeek from "startOfUTCWeek";
import startOfUTCWeekYear from "startOfUTCWeekYear";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!startOfUTCWeek) {
  obj = { default: null };
  obj[0] = startOfUTCWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCWeek;
}
let closure_1 = tmp5;
if (!startOfUTCWeekYear) {
  obj = { default: null };
  obj[0] = startOfUTCWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCWeekYear;
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

export default function getUTCWeek(arg0, arg1) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = tmp5.default(defaultResult1, arg1).getTime();
  const defaultResult2 = tmp5.default(defaultResult1, arg1);
  return Math.round((time - tmp7.default(defaultResult1, arg1).getTime()) / c4) + 1;
};
export default exports.default;