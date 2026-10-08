// === Module 4436: ? ===

// Module 4436
import module_4435_mod from "module_4435" /* 4435 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj = { default: module_4435 };
  let tmp3 = obj;
} else {
  tmp3 = module_4435;
}
module_4435 = tmp3;
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
  return Math.floor(module_4435.default(arg0) / 1000);
};
export default exports.default;