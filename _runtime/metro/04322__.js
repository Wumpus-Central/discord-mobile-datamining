// === Module 4322: ? ===

// Module 4322
import module_4314_mod from "module_4314" /* 4314 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4314 = module_4314_mod;
if (!module_4314) {
  const obj = { default: module_4314 };
  let tmp3 = obj;
} else {
  tmp3 = module_4314;
}
module_4314 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4314.default(Date.now(), arg0);
};
export default exports.default;