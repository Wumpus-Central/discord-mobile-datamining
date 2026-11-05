// === Module 4779: ? ===

// Module 4779
import module_4768_mod from "module_4768" /* 4768 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4768 = module_4768_mod;
if (!module_4768) {
  const obj = { default: module_4768 };
  let tmp3 = obj;
} else {
  tmp3 = module_4768;
}
module_4768 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4768.default(Date.now(), arg0);
};
export default exports.default;