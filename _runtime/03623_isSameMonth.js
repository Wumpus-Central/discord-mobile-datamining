// === Module 3623: isSameMonth ===

// Module 3623 (isSameMonth)
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

export default function isSameMonth(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const defaultResult2 = tmp3.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  tmp3 = fullYear === defaultResult2.getFullYear();
  if (tmp3) {
    const month = defaultResult1.getMonth();
    tmp3 = month === defaultResult2.getMonth();
  }
  return tmp3;
};
export default exports.default;