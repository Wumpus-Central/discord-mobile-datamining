// === Module 4408: ? ===

// Module 4408
import module_4258_mod from "module_4258" /* 4258 */;
import module_4409_mod from "module_4409" /* 4409 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj = { default: module_4258 };
  let tmp3 = obj;
} else {
  tmp3 = module_4258;
}
module_4258 = tmp3;
let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj2 = { default: module_4409 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4409;
}
module_4409 = tmp5;
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
  return module_4409.default(interval, module_4258.default(arg1) * c3);
};
export default exports.default;