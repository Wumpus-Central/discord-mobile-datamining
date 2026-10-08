// === Module 4526: ? ===

// Module 4526
import module_4337_mod from "module_4337" /* 4337 */;
import subDays_mod from "subDays" /* 4527 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4337 = module_4337_mod;
if (!module_4337) {
  const obj = { default: module_4337 };
  let tmp3 = obj;
} else {
  tmp3 = module_4337;
}
module_4337 = tmp3;
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
  return module_4337.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;