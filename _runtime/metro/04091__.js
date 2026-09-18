// === Module 4091: ? ===

// Module 4091
import module_4090_mod from "module_4090" /* 4090 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4090 = module_4090_mod;
if (!module_4090) {
  const obj = { default: module_4090 };
  let tmp3 = obj;
} else {
  tmp3 = module_4090;
}
module_4090 = tmp3;
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
  return Math.floor(module_4090.default(arg0) / 1000);
};
export default exports.default;