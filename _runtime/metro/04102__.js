// === Module 4102: ? ===

// Module 4102
import module_3952_mod from "module_3952" /* 3952 */;
import module_4103_mod from "module_4103" /* 4103 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let module_4103 = module_4103_mod;
if (!module_4103) {
  const obj2 = { default: module_4103 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4103;
}
module_4103 = tmp5;
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
  return module_4103.default(interval, module_3952.default(arg1) * c3);
};
export default exports.default;