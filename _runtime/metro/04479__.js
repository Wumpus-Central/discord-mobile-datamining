// === Module 4479: ? ===

// Module 4479
import module_4478_mod from "module_4478" /* 4478 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4478 = module_4478_mod;
if (!module_4478) {
  const obj = { default: module_4478 };
  let tmp3 = obj;
} else {
  tmp3 = module_4478;
}
module_4478 = tmp3;
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
  return Math.floor(module_4478.default(arg0) / 1000);
};
export default exports.default;