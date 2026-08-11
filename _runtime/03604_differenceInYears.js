// _runtime/03604_differenceInYears.js
import _typeof from "_typeof";
import differenceInCalendarYears from "differenceInCalendarYears";
import compareAsc from "compareAsc";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!differenceInCalendarYears) {
  obj = { default: null };
  obj[0] = differenceInCalendarYears;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarYears;
}
let closure_1 = tmp5;
if (!compareAsc) {
  obj = { default: null };
  obj[0] = compareAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
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

export default function differenceInYears(arg0, arg1) {
  tmp9.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const defaultResult2 = tmp3.default(arg1);
  const defaultResult3 = tmp7.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(tmp5.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(tmp7.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;