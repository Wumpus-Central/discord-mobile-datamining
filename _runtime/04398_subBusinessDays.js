// === Module 4398: subBusinessDays ===

// Module 4398 (subBusinessDays)
import module_4114_mod from "module_4114" /* 4114 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import module_3968_mod from "module_3968" /* 3968 */;

let module_4114 = module_4114_mod;
if (!module_4114) {
  const obj = { default: module_4114 };
  let tmp3 = obj;
} else {
  tmp3 = module_4114;
}
module_4114 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj3 = { default: module_3968 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3968;
}
module_3968 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4114.default(arg0, -module_3968.default(arg1));
};
export default exports.default;