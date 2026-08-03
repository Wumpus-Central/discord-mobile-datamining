// === Module 3491: startOfYear ===

// Module 3491 (startOfYear)
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

export default function startOfYear(arg0) {
  tmp5.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(tmp3.default(arg0).getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};
export default exports.default;