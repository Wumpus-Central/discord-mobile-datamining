// === Module 4073: ? ===

// Module 4073
import startOfWeek_mod from "startOfWeek" /* 3884 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === startOfWeek.default(arg1, arg2).getTime();
};
export default exports.default;