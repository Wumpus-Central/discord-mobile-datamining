// === Module 4517: ? ===

// Module 4517
import module_4509_mod from "module_4509" /* 4509 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4509 = module_4509_mod;
if (!module_4509) {
  const obj = { default: module_4509 };
  let tmp3 = obj;
} else {
  tmp3 = module_4509;
}
module_4509 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4509.default(Date.now(), arg0);
};
export default exports.default;