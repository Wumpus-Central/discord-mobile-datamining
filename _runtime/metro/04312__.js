// === Module 4312: ? ===

// Module 4312
import module_4162_mod from "module_4162" /* 4162 */;
import module_4313_mod from "module_4313" /* 4313 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4313 = module_4313_mod;
if (!module_4313) {
  const obj2 = { default: module_4313 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4313;
}
module_4313 = tmp5;
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
  return module_4313.default(interval, module_4162.default(arg1) * c3);
};
export default exports.default;