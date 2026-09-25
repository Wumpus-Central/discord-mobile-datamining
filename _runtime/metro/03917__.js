// _runtime/metro/03917__.js
import requiredArgs_mod from "../03916_requiredArgs.js";
import startOfUTCWeek_mod from "../03918_startOfUTCWeek.js";

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  const obj2 = { default: startOfUTCWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;

export default function isSameUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfUTCWeek.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === startOfUTCWeek.default(arg1, arg2).getTime();
};
export default exports.default;