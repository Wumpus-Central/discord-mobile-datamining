// === Module 4769: ? ===

// Module 4769
import module_4770_mod from "module_4770" /* 4770 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4770 = module_4770_mod;
if (!module_4770) {
  const obj = { default: module_4770 };
  let tmp3 = obj;
} else {
  tmp3 = module_4770;
}
module_4770 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4770.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;