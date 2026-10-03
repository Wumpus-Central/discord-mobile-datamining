// === Module 4114: ? ===

// Module 4114
import module_3962_mod from "module_3962" /* 3962 */;
import module_4115_mod from "module_4115" /* 4115 */;
import module_4118_mod from "module_4118" /* 4118 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj2 = { default: module_4115 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4115;
}
module_4115 = tmp5;
let module_4118 = module_4118_mod;
if (!module_4118) {
  const obj3 = { default: module_4118 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4118;
}
module_4118 = tmp7;
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
  return module_4118.default(arg0, module_4115.default(arg0) + module_3962.default(arg1));
};
export default exports.default;