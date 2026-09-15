// _runtime/metro/04078__.js
import startOfMinute_mod from "../03937_startOfMinute.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let startOfMinute = startOfMinute_mod;
if (!startOfMinute) {
  const obj = { default: startOfMinute };
  let tmp3 = obj;
} else {
  tmp3 = startOfMinute;
}
startOfMinute = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameMinute(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfMinute.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfMinute.default(arg1).getTime();
};
export default exports.default;