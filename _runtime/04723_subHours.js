// === Module 4723: subHours ===

// Module 4723 (subHours)
import module_4442_mod from "module_4442" /* 4442 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;
import module_4292_mod from "module_4292" /* 4292 */;

let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj = { default: module_4442 };
  let tmp3 = obj;
} else {
  tmp3 = module_4442;
}
module_4442 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj3 = { default: module_4292 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4292;
}
module_4292 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4442.default(arg0, -module_4292.default(arg1));
};
export default exports.default;