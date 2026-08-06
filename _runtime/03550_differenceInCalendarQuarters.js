// _runtime/03550_differenceInCalendarQuarters.js
import getQuarter from "getQuarter";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!getQuarter) {
  let obj = { default: null };
  obj[0] = getQuarter;
  let tmp3 = obj;
} else {
  tmp3 = getQuarter;
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
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function differenceInCalendarQuarters(arg0, arg1) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const defaultResult2 = tmp5.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (tmp3.default(defaultResult1) - tmp3.default(defaultResult2));
};
export default exports.default;