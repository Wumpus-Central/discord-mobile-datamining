// === Module 4535: ? ===

// Module 4535
import module_4534_mod from "module_4534" /* 4534 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4534 = module_4534_mod;
if (!module_4534) {
  const obj = { default: module_4534 };
  let tmp3 = obj;
} else {
  tmp3 = module_4534;
}
module_4534 = tmp3;
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
  return Math.floor(module_4534.default(arg0) / 1000);
};
export default exports.default;