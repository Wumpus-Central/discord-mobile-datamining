// === Module 4721: subMonths ===

// Module 4721 (subMonths)
import module_4292_mod from "module_4292" /* 4292 */;
import module_4437_mod from "module_4437" /* 4437 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let module_4437 = module_4437_mod;
if (!module_4437) {
  const obj2 = { default: module_4437 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4437;
}
module_4437 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4437.default(arg0, -module_4292.default(arg1));
};
export default exports.default;