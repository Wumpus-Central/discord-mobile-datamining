// === Module 4594: subMinutes ===

// Module 4594 (subMinutes)
import module_4323_mod from "module_4323" /* 4323 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;
import module_4162_mod from "module_4162" /* 4162 */;

let module_4323 = module_4323_mod;
if (!module_4323) {
  const obj = { default: module_4323 };
  let tmp3 = obj;
} else {
  tmp3 = module_4323;
}
module_4323 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj3 = { default: module_4162 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4162;
}
module_4162 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4323.default(arg0, -module_4162.default(arg1));
};
export default exports.default;