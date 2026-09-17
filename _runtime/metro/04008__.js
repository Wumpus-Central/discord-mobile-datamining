// === Module 4008: ? ===

// Module 4008
import module_4007_mod from "module_4007" /* 4007 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_4007 = module_4007_mod;
if (!module_4007) {
  const obj = { default: module_4007 };
  let tmp3 = obj;
} else {
  tmp3 = module_4007;
}
module_4007 = tmp3;
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
  return Math.floor(module_4007.default(arg0) / 1000);
};
export default exports.default;