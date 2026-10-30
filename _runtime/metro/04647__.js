// === Module 4647: ? ===

// Module 4647
import module_4639_mod from "module_4639" /* 4639 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4639 = module_4639_mod;
if (!module_4639) {
  const obj = { default: module_4639 };
  let tmp3 = obj;
} else {
  tmp3 = module_4639;
}
module_4639 = tmp3;
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
  return module_4639.default(Date.now(), arg0);
};
export default exports.default;