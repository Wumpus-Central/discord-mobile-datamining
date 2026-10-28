// === Module 4443: ? ===

// Module 4443
import module_4291_mod from "module_4291" /* 4291 */;
import module_4444_mod from "module_4444" /* 4444 */;
import module_4447_mod from "module_4447" /* 4447 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4444 = module_4444_mod;
if (!module_4444) {
  const obj2 = { default: module_4444 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4444;
}
module_4444 = tmp5;
let module_4447 = module_4447_mod;
if (!module_4447) {
  const obj3 = { default: module_4447 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4447;
}
module_4447 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4447.default(arg0, module_4444.default(arg0) + module_4291.default(arg1));
};
export default exports.default;