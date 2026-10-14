// === Module 4355: ? ===

// Module 4355
import module_4205_mod from "module_4205" /* 4205 */;
import module_4356_mod from "module_4356" /* 4356 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let module_4356 = module_4356_mod;
if (!module_4356) {
  const obj2 = { default: module_4356 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4356;
}
module_4356 = tmp5;
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
  return module_4356.default(interval, module_4205.default(arg1) * c3);
};
export default exports.default;