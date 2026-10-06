// === Module 4131: addSeconds ===

// Module 4131 (addSeconds)
import toInteger_mod from "toInteger" /* 3968 */;
import addMilliseconds_mod from "addMilliseconds" /* 4119 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let addMilliseconds = addMilliseconds_mod;
if (!addMilliseconds) {
  tmp5 = { default: addMilliseconds };
  const obj2 = { default: addMilliseconds };
} else {
  tmp5 = addMilliseconds;
}
addMilliseconds = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, 1000 * toInteger.default(arg1));
};