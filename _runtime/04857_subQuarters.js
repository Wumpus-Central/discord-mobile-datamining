// === Module 4857: subQuarters ===

// Module 4857 (subQuarters)
import module_4424_mod from "module_4424" /* 4424 */;
import module_4586_mod from "module_4586" /* 4586 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj = { default: module_4424 };
  let tmp3 = obj;
} else {
  tmp3 = module_4424;
}
module_4424 = tmp3;
let module_4586 = module_4586_mod;
if (!module_4586) {
  const obj2 = { default: module_4586 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4586;
}
module_4586 = tmp5;
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
  return module_4586.default(arg0, -module_4424.default(arg1));
};
export default exports.default;