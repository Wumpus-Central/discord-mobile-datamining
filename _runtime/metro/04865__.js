// === Module 4865: ? ===

// Module 4865
import module_4864_mod from "module_4864" /* 4864 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let module_4864 = module_4864_mod;
if (!module_4864) {
  const obj = { default: module_4864 };
  let tmp3 = obj;
} else {
  tmp3 = module_4864;
}
module_4864 = tmp3;
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
  return Math.floor(module_4864.default(arg0) / 1000);
};
export default exports.default;