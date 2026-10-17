// === Module 4463: ? ===

// Module 4463
import module_4298_mod from "module_4298" /* 4298 */;
import module_4443_mod from "module_4443" /* 4443 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let module_4443 = module_4443_mod;
if (!module_4443) {
  const obj2 = { default: module_4443 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4443;
}
module_4443 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4443.default(interval, 12 * module_4298.default(arg1));
};
export default exports.default;