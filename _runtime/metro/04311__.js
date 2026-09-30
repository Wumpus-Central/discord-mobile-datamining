// === Module 4311: ? ===

// Module 4311
import module_4303_mod from "module_4303" /* 4303 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4303 = module_4303_mod;
if (!module_4303) {
  const obj = { default: module_4303 };
  let tmp3 = obj;
} else {
  tmp3 = module_4303;
}
module_4303 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4303.default(arg0, Date.now());
};
export default exports.default;