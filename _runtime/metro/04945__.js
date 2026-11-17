// === Module 4945: ? ===

// Module 4945
import module_4934_mod from "module_4934" /* 4934 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4934 = module_4934_mod;
if (!module_4934) {
  const obj = { default: module_4934 };
  let tmp3 = obj;
} else {
  tmp3 = module_4934;
}
module_4934 = tmp3;
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
  return module_4934.default(Date.now(), arg0);
};
export default exports.default;