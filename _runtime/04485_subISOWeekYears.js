// === Module 4485: subISOWeekYears ===

// Module 4485 (subISOWeekYears)
import module_4445_mod from "module_4445" /* 4445 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;
import module_4293_mod from "module_4293" /* 4293 */;

let module_4445 = module_4445_mod;
if (!module_4445) {
  const obj = { default: module_4445 };
  let tmp3 = obj;
} else {
  tmp3 = module_4445;
}
module_4445 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj3 = { default: module_4293 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4293;
}
module_4293 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4445.default(arg0, -module_4293.default(arg1));
};
export default exports.default;