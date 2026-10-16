// === Module 4414: ? ===

// Module 4414
import module_4262_mod from "module_4262" /* 4262 */;
import module_4415_mod from "module_4415" /* 4415 */;
import module_4418_mod from "module_4418" /* 4418 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let module_4415 = module_4415_mod;
if (!module_4415) {
  const obj2 = { default: module_4415 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4415;
}
module_4415 = tmp5;
let module_4418 = module_4418_mod;
if (!module_4418) {
  const obj3 = { default: module_4418 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4418;
}
module_4418 = tmp7;
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
  return module_4418.default(arg0, module_4415.default(arg0) + module_4262.default(arg1));
};
export default exports.default;