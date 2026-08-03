// === Module 3629: isThisISOWeek ===

// Module 3629 (isThisISOWeek)
import isSameISOWeek from "isSameISOWeek";
import requiredArgs from "requiredArgs";

if (!isSameISOWeek) {
  let obj = { default: null };
  obj[0] = isSameISOWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameISOWeek;
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

export default function isThisISOWeek(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, Date.now());
};
export default exports.default;