// === Module 4368: ? ===

// Module 4368
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

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4356.default(interval, 1000 * module_4205.default(arg1));
};
export default exports.default;