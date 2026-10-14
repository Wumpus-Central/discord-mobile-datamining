// === Module 4637: subMinutes ===

// Module 4637 (subMinutes)
import module_4366_mod from "module_4366" /* 4366 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;
import module_4205_mod from "module_4205" /* 4205 */;

let module_4366 = module_4366_mod;
if (!module_4366) {
  const obj = { default: module_4366 };
  let tmp3 = obj;
} else {
  tmp3 = module_4366;
}
module_4366 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj3 = { default: module_4205 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4205;
}
module_4205 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4366.default(arg0, -module_4205.default(arg1));
};
export default exports.default;