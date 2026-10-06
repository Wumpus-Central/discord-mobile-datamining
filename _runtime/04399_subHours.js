// === Module 4399: subHours ===

// Module 4399 (subHours)
import addHours_mod from "addHours" /* 4118 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import toInteger_mod from "toInteger" /* 3968 */;

let tmp3;
let tmp5;
let tmp7;
let addHours = addHours_mod;
if (!addHours) {
  tmp3 = { default: addHours };
  const obj = { default: addHours };
} else {
  tmp3 = addHours;
}
addHours = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addHours.default(arg0, -toInteger.default(arg1));
};