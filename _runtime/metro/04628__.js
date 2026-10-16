// === Module 4628: ? ===

// Module 4628
import module_4439_mod from "module_4439" /* 4439 */;
import subDays_mod from "subDays" /* 4629 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj = { default: module_4439 };
  let tmp3 = obj;
} else {
  tmp3 = module_4439;
}
module_4439 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4439.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;