// === Module 4197: subMilliseconds ===

// Module 4197 (subMilliseconds)
import module_4119_mod from "module_4119" /* 4119 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import module_3968_mod from "module_3968" /* 3968 */;

let module_4119 = module_4119_mod;
if (!module_4119) {
  const obj = { default: module_4119 };
  let tmp3 = obj;
} else {
  tmp3 = module_4119;
}
module_4119 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj3 = { default: module_3968 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3968;
}
module_3968 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4119.default(arg0, -module_3968.default(arg1));
};
export default exports.default;