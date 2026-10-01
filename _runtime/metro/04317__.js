// === Module 4317: ? ===

// Module 4317
import module_4128_mod from "module_4128" /* 4128 */;
import subDays_mod from "subDays" /* 4318 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4128 = module_4128_mod;
if (!module_4128) {
  const obj = { default: module_4128 };
  let tmp3 = obj;
} else {
  tmp3 = module_4128;
}
module_4128 = tmp3;
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
  return module_4128.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;