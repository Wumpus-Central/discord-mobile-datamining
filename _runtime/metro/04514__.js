// === Module 4514: ? ===

// Module 4514
import module_4503_mod from "module_4503" /* 4503 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4503 = module_4503_mod;
if (!module_4503) {
  const obj = { default: module_4503 };
  let tmp3 = obj;
} else {
  tmp3 = module_4503;
}
module_4503 = tmp3;
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
  return module_4503.default(Date.now(), arg0);
};
export default exports.default;