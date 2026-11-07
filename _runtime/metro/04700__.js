// === Module 4700: ? ===

// Module 4700
import module_4699_mod from "module_4699" /* 4699 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4699 = module_4699_mod;
if (!module_4699) {
  const obj = { default: module_4699 };
  let tmp3 = obj;
} else {
  tmp3 = module_4699;
}
module_4699 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4699.default(arg0) / 1000);
};
export default exports.default;