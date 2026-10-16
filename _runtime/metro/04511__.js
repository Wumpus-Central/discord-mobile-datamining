// === Module 4511: ? ===

// Module 4511
import module_4509_mod from "module_4509" /* 4509 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

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

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4509.default(arg0, Date.now(), arg1);
};
export default exports.default;