// _runtime/04317_isSameSecond.js
import startOfSecond_mod from "04318_startOfSecond.js";
import requiredArgs_mod from "03965_requiredArgs.js";

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
}
