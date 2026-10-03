// === Module 4393: subHours ===

// Module 4393 (subHours)
import module_4112_mod from "module_4112" /* 4112 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;
import module_3962_mod from "module_3962" /* 3962 */;

let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj = { default: module_4112 };
  let tmp3 = obj;
} else {
  tmp3 = module_4112;
}
module_4112 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj3 = { default: module_3962 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3962;
}
module_3962 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4112.default(arg0, -module_3962.default(arg1));
};
export default exports.default;