// === Module 4793: subDays ===

// Module 4793 (subDays)
import module_4570_mod from "module_4570" /* 4570 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;
import module_4426_mod from "module_4426" /* 4426 */;

let module_4570 = module_4570_mod;
if (!module_4570) {
  const obj = { default: module_4570 };
  let tmp3 = obj;
} else {
  tmp3 = module_4570;
}
module_4570 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj3 = { default: module_4426 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4426;
}
module_4426 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4570.default(arg0, -module_4426.default(arg1));
};
export default exports.default;