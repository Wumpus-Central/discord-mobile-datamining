// === Module 4787: ? ===

// Module 4787
import module_4603_mod from "module_4603" /* 4603 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4603 = module_4603_mod;
if (!module_4603) {
  const obj = { default: module_4603 };
  let tmp3 = obj;
} else {
  tmp3 = module_4603;
}
module_4603 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4603.default(arg0, Date.now());
};
export default exports.default;