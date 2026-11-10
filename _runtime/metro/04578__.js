// === Module 4578: ? ===

// Module 4578
import module_4426_mod from "module_4426" /* 4426 */;
import module_4579_mod from "module_4579" /* 4579 */;
import module_4582_mod from "module_4582" /* 4582 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let module_4579 = module_4579_mod;
if (!module_4579) {
  const obj2 = { default: module_4579 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4579;
}
module_4579 = tmp5;
let module_4582 = module_4582_mod;
if (!module_4582) {
  const obj3 = { default: module_4582 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4582;
}
module_4582 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4582.default(arg0, module_4579.default(arg0) + module_4426.default(arg1));
};
export default exports.default;