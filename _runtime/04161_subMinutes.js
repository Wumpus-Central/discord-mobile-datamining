// === Module 4161: subMinutes ===

// Module 4161 (subMinutes)
import module_3890_mod from "module_3890" /* 3890 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;
import module_3729_mod from "module_3729" /* 3729 */;

let module_3890 = module_3890_mod;
if (!module_3890) {
  const obj = { default: module_3890 };
  let tmp3 = obj;
} else {
  tmp3 = module_3890;
}
module_3890 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj3 = { default: module_3729 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3729;
}
module_3729 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3890.default(arg0, -module_3729.default(arg1));
};
export default exports.default;