// === Module 4592: ? ===

// Module 4592
import module_4584_mod from "module_4584" /* 4584 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4584 = module_4584_mod;
if (!module_4584) {
  const obj = { default: module_4584 };
  let tmp3 = obj;
} else {
  tmp3 = module_4584;
}
module_4584 = tmp3;
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
  return module_4584.default(Date.now(), arg0);
};
export default exports.default;