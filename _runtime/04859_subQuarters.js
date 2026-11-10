// === Module 4859: subQuarters ===

// Module 4859 (subQuarters)
import module_4426_mod from "module_4426" /* 4426 */;
import module_4588_mod from "module_4588" /* 4588 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let module_4588 = module_4588_mod;
if (!module_4588) {
  const obj2 = { default: module_4588 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4588;
}
module_4588 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4588.default(arg0, -module_4426.default(arg1));
};
export default exports.default;