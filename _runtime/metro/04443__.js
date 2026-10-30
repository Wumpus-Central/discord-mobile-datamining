// === Module 4443: ? ===

// Module 4443
import module_4293_mod from "module_4293" /* 4293 */;
import module_4444_mod from "module_4444" /* 4444 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4444 = module_4444_mod;
if (!module_4444) {
  const obj2 = { default: module_4444 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4444;
}
module_4444 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4444.default(interval, module_4293.default(arg1) * c3);
};
export default exports.default;