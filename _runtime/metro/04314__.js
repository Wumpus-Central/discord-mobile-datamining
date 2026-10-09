// === Module 4314: ? ===

// Module 4314
import module_4162_mod from "module_4162" /* 4162 */;
import module_4315_mod from "module_4315" /* 4315 */;
import module_4318_mod from "module_4318" /* 4318 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4315 = module_4315_mod;
if (!module_4315) {
  const obj2 = { default: module_4315 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4315;
}
module_4315 = tmp5;
let module_4318 = module_4318_mod;
if (!module_4318) {
  const obj3 = { default: module_4318 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4318;
}
module_4318 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4318.default(arg0, module_4315.default(arg0) + module_4162.default(arg1));
};
export default exports.default;