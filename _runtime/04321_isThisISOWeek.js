// === Module 4321: isThisISOWeek ===

// Module 4321 (isThisISOWeek)
import isSameISOWeek_mod from "isSameISOWeek" /* 4311 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let isSameISOWeek = isSameISOWeek_mod;
if (!isSameISOWeek) {
  tmp3 = { default: isSameISOWeek };
  const obj = { default: isSameISOWeek };
} else {
  tmp3 = isSameISOWeek;
}
isSameISOWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return isSameISOWeek.default(arg0, Date.now());
};