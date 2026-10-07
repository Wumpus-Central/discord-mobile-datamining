// === Module 4311: ? ===

// Module 4311
import module_4312_mod from "module_4312" /* 4312 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4312 = module_4312_mod;
if (!module_4312) {
  const obj = { default: module_4312 };
  let tmp3 = obj;
} else {
  tmp3 = module_4312;
}
module_4312 = tmp3;
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
  return module_4312.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;