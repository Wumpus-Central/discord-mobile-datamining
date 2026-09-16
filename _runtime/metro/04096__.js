// === Module 4096: ? ===

// Module 4096
import module_3907_mod from "module_3907" /* 3907 */;
import subDays_mod from "subDays" /* 4097 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3907 = module_3907_mod;
if (!module_3907) {
  const obj = { default: module_3907 };
  let tmp3 = obj;
} else {
  tmp3 = module_3907;
}
module_3907 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3907.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;