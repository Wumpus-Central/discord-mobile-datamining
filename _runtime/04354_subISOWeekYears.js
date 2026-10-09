// === Module 4354: subISOWeekYears ===

// Module 4354 (subISOWeekYears)
import module_4314_mod from "module_4314" /* 4314 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;
import module_4162_mod from "module_4162" /* 4162 */;

let module_4314 = module_4314_mod;
if (!module_4314) {
  const obj = { default: module_4314 };
  let tmp3 = obj;
} else {
  tmp3 = module_4314;
}
module_4314 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj3 = { default: module_4162 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4162;
}
module_4162 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4314.default(arg0, -module_4162.default(arg1));
};
export default exports.default;