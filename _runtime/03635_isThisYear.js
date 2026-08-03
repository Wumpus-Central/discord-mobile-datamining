// === Module 3635: isThisYear ===

// Module 3635 (isThisYear)
import isSameYear from "isSameYear";
import requiredArgs from "requiredArgs";

if (!isSameYear) {
  let obj = { default: null };
  obj[0] = isSameYear;
  let tmp3 = obj;
} else {
  tmp3 = isSameYear;
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

export default function isThisYear(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, Date.now());
};
export default exports.default;