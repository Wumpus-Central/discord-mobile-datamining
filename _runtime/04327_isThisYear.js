// === Module 4327: isThisYear ===

// Module 4327 (isThisYear)
import isSameYear_mod from "isSameYear" /* 4319 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let isSameYear = isSameYear_mod;
if (!isSameYear) {
  tmp3 = { default: isSameYear };
  const obj = { default: isSameYear };
} else {
  tmp3 = isSameYear;
}
isSameYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(arg0, Date.now());
};