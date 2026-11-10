// === Module 4861: subWeeks ===

// Module 4861 (subWeeks)
import module_4426_mod from "module_4426" /* 4426 */;
import module_4590_mod from "module_4590" /* 4590 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let module_4590 = module_4590_mod;
if (!module_4590) {
  const obj2 = { default: module_4590 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4590;
}
module_4590 = tmp5;
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
  return module_4590.default(arg0, -module_4426.default(arg1));
};
export default exports.default;