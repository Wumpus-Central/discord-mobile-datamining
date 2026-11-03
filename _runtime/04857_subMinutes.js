// === Module 4857: subMinutes ===

// Module 4857 (subMinutes)
import module_4586_mod from "module_4586" /* 4586 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;
import module_4425_mod from "module_4425" /* 4425 */;

let module_4586 = module_4586_mod;
if (!module_4586) {
  const obj = { default: module_4586 };
  let tmp3 = obj;
} else {
  tmp3 = module_4586;
}
module_4586 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj3 = { default: module_4425 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4425;
}
module_4425 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4586.default(arg0, -module_4425.default(arg1));
};
export default exports.default;