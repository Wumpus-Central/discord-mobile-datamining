// === Module 4788: ? ===

// Module 4788
import module_4604_mod from "module_4604" /* 4604 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4604.default(arg0, Date.now());
};
export default exports.default;