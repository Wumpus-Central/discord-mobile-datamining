// === Module 4131: ? ===

// Module 4131
import module_3968_mod from "module_3968" /* 3968 */;
import module_4119_mod from "module_4119" /* 4119 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
let module_4119 = module_4119_mod;
if (!module_4119) {
  const obj2 = { default: module_4119 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4119;
}
module_4119 = tmp5;
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
  return module_4119.default(interval, 1000 * module_3968.default(arg1));
};
export default exports.default;