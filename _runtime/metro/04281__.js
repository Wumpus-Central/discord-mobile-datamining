// === Module 4281: ? ===

// Module 4281
import module_4273_mod from "module_4273" /* 4273 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4273 = module_4273_mod;
if (!module_4273) {
  const obj = { default: module_4273 };
  let tmp3 = obj;
} else {
  tmp3 = module_4273;
}
module_4273 = tmp3;
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
  return module_4273.default(arg0, Date.now());
};
export default exports.default;