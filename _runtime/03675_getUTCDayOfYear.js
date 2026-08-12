// _runtime/03675_getUTCDayOfYear.js
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;
let c2 = 86400000;

export default function getUTCDayOfYear(arg0) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = defaultResult1.getTime();
  defaultResult1.setUTCMonth(0, 1);
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return Math.floor((time - defaultResult1.getTime()) / c2) + 1;
};
export default exports.default;