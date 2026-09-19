// === Module 4210: ? ===

// Module 4210
import module_4026_mod from "module_4026" /* 4026 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4026 = module_4026_mod;
if (!module_4026) {
  const obj = { default: module_4026 };
  let tmp3 = obj;
} else {
  tmp3 = module_4026;
}
module_4026 = tmp3;
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
  return module_4026.default(arg0, Date.now());
};
export default exports.default;