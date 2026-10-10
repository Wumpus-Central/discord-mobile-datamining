// === Module 4560: ? ===

// Module 4560
import module_4552_mod from "module_4552" /* 4552 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4552 = module_4552_mod;
if (!module_4552) {
  const obj = { default: module_4552 };
  let tmp3 = obj;
} else {
  tmp3 = module_4552;
}
module_4552 = tmp3;
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
  return module_4552.default(Date.now(), arg0);
};
export default exports.default;