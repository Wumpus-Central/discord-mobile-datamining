// === Module 4098: ? ===

// Module 4098
import module_3909_mod from "module_3909" /* 3909 */;
import subDays_mod from "subDays" /* 4099 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3909 = module_3909_mod;
if (!module_3909) {
  const obj = { default: module_3909 };
  let tmp3 = obj;
} else {
  tmp3 = module_3909;
}
module_3909 = tmp3;
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
  return module_3909.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;