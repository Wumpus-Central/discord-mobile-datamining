// === Module 4506: ? ===

// Module 4506
import module_4502_mod from "module_4502" /* 4502 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4502 = module_4502_mod;
if (!module_4502) {
  const obj = { default: module_4502 };
  let tmp3 = obj;
} else {
  tmp3 = module_4502;
}
module_4502 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4502.default(arg0, Date.now(), arg1);
};
export default exports.default;