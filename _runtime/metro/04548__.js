// === Module 4548: ? ===

// Module 4548
import module_4549_mod from "module_4549" /* 4549 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4549 = module_4549_mod;
if (!module_4549) {
  const obj = { default: module_4549 };
  let tmp3 = obj;
} else {
  tmp3 = module_4549;
}
module_4549 = tmp3;
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
  return module_4549.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;