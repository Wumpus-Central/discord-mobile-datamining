// === Module 4382: subBusinessDays ===

// Module 4382 (subBusinessDays)
import module_4098_mod from "module_4098" /* 4098 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;
import module_3952_mod from "module_3952" /* 3952 */;

let module_4098 = module_4098_mod;
if (!module_4098) {
  const obj = { default: module_4098 };
  let tmp3 = obj;
} else {
  tmp3 = module_4098;
}
module_4098 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj3 = { default: module_3952 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3952;
}
module_3952 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4098.default(arg0, -module_3952.default(arg1));
};
export default exports.default;