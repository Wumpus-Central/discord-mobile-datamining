// === Module 4557: ? ===

// Module 4557
import module_4546_mod from "module_4546" /* 4546 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4546 = module_4546_mod;
if (!module_4546) {
  const obj = { default: module_4546 };
  let tmp3 = obj;
} else {
  tmp3 = module_4546;
}
module_4546 = tmp3;
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
  return module_4546.default(Date.now(), arg0);
};
export default exports.default;