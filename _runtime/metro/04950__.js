// === Module 4950: ? ===

// Module 4950
import module_4942_mod from "module_4942" /* 4942 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4942 = module_4942_mod;
if (!module_4942) {
  const obj = { default: module_4942 };
  let tmp3 = obj;
} else {
  tmp3 = module_4942;
}
module_4942 = tmp3;
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
  return module_4942.default(Date.now(), arg0);
};
export default exports.default;