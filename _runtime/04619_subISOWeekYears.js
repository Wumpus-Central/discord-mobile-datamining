// === Module 4619: subISOWeekYears ===

// Module 4619 (subISOWeekYears)
import module_4579_mod from "module_4579" /* 4579 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;
import module_4427_mod from "module_4427" /* 4427 */;

let module_4579 = module_4579_mod;
if (!module_4579) {
  const obj = { default: module_4579 };
  let tmp3 = obj;
} else {
  tmp3 = module_4579;
}
module_4579 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj3 = { default: module_4427 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4427;
}
module_4427 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4579.default(arg0, -module_4427.default(arg1));
};
export default exports.default;