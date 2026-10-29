// === Module 4635: ? ===

// Module 4635
import module_4636_mod from "module_4636" /* 4636 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4636 = module_4636_mod;
if (!module_4636) {
  const obj = { default: module_4636 };
  let tmp3 = obj;
} else {
  tmp3 = module_4636;
}
module_4636 = tmp3;
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
  return module_4636.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;