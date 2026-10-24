// === Module 4612: ? ===

// Module 4612
import module_4604_mod from "module_4604" /* 4604 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4604 = module_4604_mod;
if (!module_4604) {
  const obj = { default: module_4604 };
  let tmp3 = obj;
} else {
  tmp3 = module_4604;
}
module_4604 = tmp3;
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
  return module_4604.default(Date.now(), arg0);
};
export default exports.default;