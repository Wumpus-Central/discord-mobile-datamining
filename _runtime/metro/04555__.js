// === Module 4555: ? ===

// Module 4555
import module_4544_mod from "module_4544" /* 4544 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4544 = module_4544_mod;
if (!module_4544) {
  const obj = { default: module_4544 };
  let tmp3 = obj;
} else {
  tmp3 = module_4544;
}
module_4544 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4544.default(Date.now(), arg0);
};
export default exports.default;