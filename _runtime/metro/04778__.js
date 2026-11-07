// === Module 4778: ? ===

// Module 4778
import module_4770_mod from "module_4770" /* 4770 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4770 = module_4770_mod;
if (!module_4770) {
  const obj = { default: module_4770 };
  let tmp3 = obj;
} else {
  tmp3 = module_4770;
}
module_4770 = tmp3;
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
  return module_4770.default(Date.now(), arg0);
};
export default exports.default;