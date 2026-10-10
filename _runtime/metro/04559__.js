// === Module 4559: ? ===

// Module 4559
import module_4551_mod from "module_4551" /* 4551 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4551 = module_4551_mod;
if (!module_4551) {
  const obj = { default: module_4551 };
  let tmp3 = obj;
} else {
  tmp3 = module_4551;
}
module_4551 = tmp3;
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
  return module_4551.default(Date.now(), arg0);
};
export default exports.default;