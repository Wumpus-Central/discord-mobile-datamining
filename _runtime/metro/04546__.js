// === Module 4546: ? ===

// Module 4546
import module_4547_mod from "module_4547" /* 4547 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4547 = module_4547_mod;
if (!module_4547) {
  const obj = { default: module_4547 };
  let tmp3 = obj;
} else {
  tmp3 = module_4547;
}
module_4547 = tmp3;
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
  return module_4547.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;