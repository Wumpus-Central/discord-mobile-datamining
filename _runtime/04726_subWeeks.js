// === Module 4726: subWeeks ===

// Module 4726 (subWeeks)
import module_4291_mod from "module_4291" /* 4291 */;
import module_4455_mod from "module_4455" /* 4455 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4455 = module_4455_mod;
if (!module_4455) {
  const obj2 = { default: module_4455 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4455;
}
module_4455 = tmp5;
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
  return module_4455.default(arg0, -module_4291.default(arg1));
};
export default exports.default;