// === Module 4317: isSameSecond ===

// Module 4317 (isSameSecond)
import startOfSecond_mod from "startOfSecond" /* 4318 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let startOfSecond = startOfSecond_mod;
if (!startOfSecond) {
  tmp3 = { default: startOfSecond };
  const obj = { default: startOfSecond };
} else {
  tmp3 = startOfSecond;
}
startOfSecond = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameSecond(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfSecond.default(arg0);
  const defaultResult2 = startOfSecond.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};