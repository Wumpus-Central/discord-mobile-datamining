// === Module 4701: ? ===

// Module 4701
import module_4700_mod from "module_4700" /* 4700 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4700 = module_4700_mod;
if (!module_4700) {
  const obj = { default: module_4700 };
  let tmp3 = obj;
} else {
  tmp3 = module_4700;
}
module_4700 = tmp3;
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
  return Math.floor(module_4700.default(arg0) / 1000);
};
export default exports.default;