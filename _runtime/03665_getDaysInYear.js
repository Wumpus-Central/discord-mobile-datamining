// _runtime/03665_getDaysInYear.js
import _typeof from "_typeof";
import isLeapYear from "isLeapYear";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!isLeapYear) {
  obj = { default: null };
  obj[0] = isLeapYear;
  let tmp5 = obj;
} else {
  tmp5 = isLeapYear;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function getDaysInYear(arg0) {
  tmp7.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (tmp5.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;