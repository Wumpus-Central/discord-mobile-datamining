// === Module 3510: compareAsc ===

// Module 3510 (compareAsc)
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

export default function compareAsc(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = defaultResult1.getTime();
  const diff = time - tmp3.default(arg1).getTime();
  let num = -1;
  if (diff >= 0) {
    let num2 = 1;
    if (diff <= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
};
export default exports.default;