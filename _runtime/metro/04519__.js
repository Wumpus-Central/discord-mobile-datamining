// === Module 4519: ? ===

// Module 4519
import module_4511_mod from "module_4511" /* 4511 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4511 = module_4511_mod;
if (!module_4511) {
  const obj = { default: module_4511 };
  let tmp3 = obj;
} else {
  tmp3 = module_4511;
}
module_4511 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4511.default(arg0, Date.now());
};
export default exports.default;