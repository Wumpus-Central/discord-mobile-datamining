// === Module 4396: ? ===

// Module 4396
import module_4235_mod from "module_4235" /* 4235 */;
import module_4386_mod from "module_4386" /* 4386 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let module_4386 = module_4386_mod;
if (!module_4386) {
  const obj2 = { default: module_4386 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4386;
}
module_4386 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4386.default(interval, module_4235.default(arg1) * c3);
};
export default exports.default;