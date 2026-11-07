// === Module 4780: ? ===

// Module 4780
import module_4772_mod from "module_4772" /* 4772 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4772 = module_4772_mod;
if (!module_4772) {
  const obj = { default: module_4772 };
  let tmp3 = obj;
} else {
  tmp3 = module_4772;
}
module_4772 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4772.default(Date.now(), arg0);
};
export default exports.default;