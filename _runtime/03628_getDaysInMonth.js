// _runtime/03628_getDaysInMonth.js
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

export default function getDaysInMonth(arg0) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const month = defaultResult1.getMonth();
  const date = new Date(0);
  date.setFullYear(fullYear, month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date.getDate();
};
export default exports.default;