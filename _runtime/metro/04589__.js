// === Module 4589: ? ===

// Module 4589
import module_4427_mod from "module_4427" /* 4427 */;
import module_4572_mod from "module_4572" /* 4572 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let module_4572 = module_4572_mod;
if (!module_4572) {
  const obj2 = { default: module_4572 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4572;
}
module_4572 = tmp5;
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
  return module_4572.default(arg0, 3 * module_4427.default(arg1));
};
export default exports.default;