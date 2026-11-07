// === Module 4587: ? ===

// Module 4587
import module_4424_mod from "module_4424" /* 4424 */;
import module_4575_mod from "module_4575" /* 4575 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj = { default: module_4424 };
  let tmp3 = obj;
} else {
  tmp3 = module_4424;
}
module_4424 = tmp3;
let module_4575 = module_4575_mod;
if (!module_4575) {
  const obj2 = { default: module_4575 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4575;
}
module_4575 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4575.default(interval, 1000 * module_4424.default(arg1));
};
export default exports.default;