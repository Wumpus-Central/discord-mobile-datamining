// _runtime/03966_isSameUTCWeek.js
import requiredArgs_mod from "03965_requiredArgs.js";
import startOfUTCWeek_mod from "03967_startOfUTCWeek.js";

let tmp3;
let tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  tmp5 = { default: startOfUTCWeek };
  const obj2 = { default: startOfUTCWeek };
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;

export default function isSameUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfUTCWeek.default(arg0, arg2);
  const defaultResult2 = startOfUTCWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
}
