// === Module 4330: isTomorrow ===

// Module 4330 (isTomorrow)
import addDays_mod from "addDays" /* 4112 */;
import isSameDay_mod from "isSameDay" /* 4145 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
let addDays = addDays_mod;
if (!addDays) {
  tmp3 = { default: addDays };
  const obj = { default: addDays };
} else {
  tmp3 = addDays;
}
addDays = tmp3;
let isSameDay = isSameDay_mod;
if (!isSameDay) {
  tmp5 = { default: isSameDay };
  const obj2 = { default: isSameDay };
} else {
  tmp5 = isSameDay;
}
isSameDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, addDays.default(Date.now(), 1));
};