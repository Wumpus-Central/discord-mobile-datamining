// === Module 4387: subWeeks ===

// Module 4387 (subWeeks)
import module_3952_mod from "module_3952" /* 3952 */;
import module_4116_mod from "module_4116" /* 4116 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let module_4116 = module_4116_mod;
if (!module_4116) {
  const obj2 = { default: module_4116 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4116;
}
module_4116 = tmp5;
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
  return module_4116.default(arg0, -module_3952.default(arg1));
};
export default exports.default;