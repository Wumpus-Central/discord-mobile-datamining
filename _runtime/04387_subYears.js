// === Module 4387: subYears ===

// Module 4387 (subYears)
import module_3951_mod from "module_3951" /* 3951 */;
import module_4116_mod from "module_4116" /* 4116 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4116 = module_4116_mod;
if (!module_4116) {
  const obj2 = { default: module_4116 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4116;
}
module_4116 = tmp5;
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
  return module_4116.default(arg0, -module_3951.default(arg1));
};
export default exports.default;