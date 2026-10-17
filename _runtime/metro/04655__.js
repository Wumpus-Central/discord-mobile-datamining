// === Module 4655: ? ===

// Module 4655
import module_4647_mod from "module_4647" /* 4647 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4647 = module_4647_mod;
if (!module_4647) {
  const obj = { default: module_4647 };
  let tmp3 = obj;
} else {
  tmp3 = module_4647;
}
module_4647 = tmp3;
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
  return module_4647.default(Date.now(), arg0);
};
export default exports.default;