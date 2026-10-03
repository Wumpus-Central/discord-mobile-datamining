// === Module 4112: ? ===

// Module 4112
import module_3962_mod from "module_3962" /* 3962 */;
import module_4113_mod from "module_4113" /* 4113 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4113 = module_4113_mod;
if (!module_4113) {
  const obj2 = { default: module_4113 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4113;
}
module_4113 = tmp5;
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
  return module_4113.default(interval, module_3962.default(arg1) * c3);
};
export default exports.default;