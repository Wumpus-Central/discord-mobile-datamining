// === Module 4091: ? ===

// Module 4091
import module_3907_mod from "module_3907" /* 3907 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3907 = module_3907_mod;
if (!module_3907) {
  const obj = { default: module_3907 };
  let tmp3 = obj;
} else {
  tmp3 = module_3907;
}
module_3907 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3907.default(arg0, Date.now());
};
export default exports.default;