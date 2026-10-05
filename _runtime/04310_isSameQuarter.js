// _runtime/04310_isSameQuarter.js
import startOfQuarter_mod from "04170_startOfQuarter.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  tmp3 = { default: startOfQuarter };
  const obj = { default: startOfQuarter };
} else {
  tmp3 = startOfQuarter;
}
startOfQuarter = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfQuarter.default(arg0);
  const defaultResult2 = startOfQuarter.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
}
