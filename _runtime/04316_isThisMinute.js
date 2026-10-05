// _runtime/04316_isThisMinute.js
import isSameMinute_mod from "04308_isSameMinute.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let isSameMinute = isSameMinute_mod;
if (!isSameMinute) {
  tmp3 = { default: isSameMinute };
  const obj = { default: isSameMinute };
} else {
  tmp3 = isSameMinute;
}
isSameMinute = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return isSameMinute.default(Date.now(), arg0);
}
