// === Module 4588: ? ===

// Module 4588
import module_4426_mod from "module_4426" /* 4426 */;
import module_4571_mod from "module_4571" /* 4571 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj2 = { default: module_4571 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4571;
}
module_4571 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4571.default(arg0, 3 * module_4426.default(arg1));
};
export default exports.default;