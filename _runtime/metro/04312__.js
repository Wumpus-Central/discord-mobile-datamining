// === Module 4312: ? ===

// Module 4312
import module_4160_mod from "module_4160" /* 4160 */;
import module_4313_mod from "module_4313" /* 4313 */;
import module_4316_mod from "module_4316" /* 4316 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
let module_4313 = module_4313_mod;
if (!module_4313) {
  const obj2 = { default: module_4313 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4313;
}
module_4313 = tmp5;
let module_4316 = module_4316_mod;
if (!module_4316) {
  const obj3 = { default: module_4316 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4316;
}
module_4316 = tmp7;
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
  return module_4316.default(arg0, module_4313.default(arg0) + module_4160.default(arg1));
};
export default exports.default;