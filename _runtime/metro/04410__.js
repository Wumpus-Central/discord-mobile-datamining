// === Module 4410: ? ===

// Module 4410
import module_4258_mod from "module_4258" /* 4258 */;
import module_4411_mod from "module_4411" /* 4411 */;
import module_4414_mod from "module_4414" /* 4414 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj = { default: module_4258 };
  let tmp3 = obj;
} else {
  tmp3 = module_4258;
}
module_4258 = tmp3;
let module_4411 = module_4411_mod;
if (!module_4411) {
  const obj2 = { default: module_4411 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4411;
}
module_4411 = tmp5;
let module_4414 = module_4414_mod;
if (!module_4414) {
  const obj3 = { default: module_4414 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4414;
}
module_4414 = tmp7;
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
  return module_4414.default(arg0, module_4411.default(arg0) + module_4258.default(arg1));
};
export default exports.default;