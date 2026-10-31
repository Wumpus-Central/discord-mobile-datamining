// === Module 4730: subMinutes ===

// Module 4730 (subMinutes)
import module_4459_mod from "module_4459" /* 4459 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;
import module_4298_mod from "module_4298" /* 4298 */;

let module_4459 = module_4459_mod;
if (!module_4459) {
  const obj = { default: module_4459 };
  let tmp3 = obj;
} else {
  tmp3 = module_4459;
}
module_4459 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj3 = { default: module_4298 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4298;
}
module_4298 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4459.default(arg0, -module_4298.default(arg1));
};
export default exports.default;