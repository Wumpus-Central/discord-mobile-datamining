// === Module 4784: ? ===

// Module 4784
import module_4776_mod from "module_4776" /* 4776 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4776 = module_4776_mod;
if (!module_4776) {
  const obj = { default: module_4776 };
  let tmp3 = obj;
} else {
  tmp3 = module_4776;
}
module_4776 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4776.default(Date.now(), arg0);
};
export default exports.default;