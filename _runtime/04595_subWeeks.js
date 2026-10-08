// === Module 4595: subWeeks ===

// Module 4595 (subWeeks)
import module_4160_mod from "module_4160" /* 4160 */;
import module_4324_mod from "module_4324" /* 4324 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
let module_4324 = module_4324_mod;
if (!module_4324) {
  const obj2 = { default: module_4324 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4324;
}
module_4324 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4324.default(arg0, -module_4160.default(arg1));
};
export default exports.default;