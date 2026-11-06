// === Module 4797: ? ===

// Module 4797
import module_4798_mod from "module_4798" /* 4798 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4798 = module_4798_mod;
if (!module_4798) {
  const obj = { default: module_4798 };
  let tmp3 = obj;
} else {
  tmp3 = module_4798;
}
module_4798 = tmp3;
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
  return module_4798.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;