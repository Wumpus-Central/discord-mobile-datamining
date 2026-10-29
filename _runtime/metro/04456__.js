// === Module 4456: ? ===

// Module 4456
import module_4292_mod from "module_4292" /* 4292 */;
import module_4436_mod from "module_4436" /* 4436 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj2 = { default: module_4436 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4436;
}
module_4436 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4436.default(arg0, 7 * module_4292.default(arg1));
};
export default exports.default;