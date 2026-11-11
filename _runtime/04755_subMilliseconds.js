// === Module 4755: subMilliseconds ===

// Module 4755 (subMilliseconds)
import module_4677_mod from "module_4677" /* 4677 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;
import module_4526_mod from "module_4526" /* 4526 */;

let module_4677 = module_4677_mod;
if (!module_4677) {
  const obj = { default: module_4677 };
  let tmp3 = obj;
} else {
  tmp3 = module_4677;
}
module_4677 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj3 = { default: module_4526 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4526;
}
module_4526 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4677.default(arg0, -module_4526.default(arg1));
};
export default exports.default;