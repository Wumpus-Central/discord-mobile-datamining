// _runtime/metro/04078__.js
import startOfQuarter_mod from "../03938_startOfQuarter.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  const obj = { default: startOfQuarter };
  let tmp3 = obj;
} else {
  tmp3 = startOfQuarter;
}
startOfQuarter = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfQuarter.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfQuarter.default(arg1).getTime();
};
export default exports.default;