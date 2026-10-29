// === Module 4455: ? ===

// Module 4455
import module_4292_mod from "module_4292" /* 4292 */;
import module_4443_mod from "module_4443" /* 4443 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
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

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4443.default(interval, 1000 * module_4292.default(arg1));
};
export default exports.default;