// === Module 4671: subYears ===

// Module 4671 (subYears)
import module_4235_mod from "module_4235" /* 4235 */;
import module_4400_mod from "module_4400" /* 4400 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let module_4400 = module_4400_mod;
if (!module_4400) {
  const obj2 = { default: module_4400 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4400;
}
module_4400 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4400.default(arg0, -module_4235.default(arg1));
};
export default exports.default;