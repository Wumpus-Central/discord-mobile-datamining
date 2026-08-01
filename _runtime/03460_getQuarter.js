// === Module 3460: getQuarter ===

// Module 3460 (getQuarter)
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

export default function getQuarter(arg0) {
  tmp5.default(1, arguments);
  return Math.floor(tmp3.default(arg0).getMonth() / 3) + 1;
};
export default exports.default;