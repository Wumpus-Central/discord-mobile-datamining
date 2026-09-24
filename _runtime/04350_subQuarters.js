// === Module 4350: subQuarters ===

// Module 4350 (subQuarters)
import module_3917_mod from "module_3917" /* 3917 */;
import module_4079_mod from "module_4079" /* 4079 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4079 = module_4079_mod;
if (!module_4079) {
  const obj2 = { default: module_4079 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4079;
}
module_4079 = tmp5;
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
  return module_4079.default(arg0, -module_3917.default(arg1));
};
export default exports.default;