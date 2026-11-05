// === Module 4579: ? ===

// Module 4579
import module_4427_mod from "module_4427" /* 4427 */;
import module_4580_mod from "module_4580" /* 4580 */;
import module_4583_mod from "module_4583" /* 4583 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let module_4580 = module_4580_mod;
if (!module_4580) {
  const obj2 = { default: module_4580 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4580;
}
module_4580 = tmp5;
let module_4583 = module_4583_mod;
if (!module_4583) {
  const obj3 = { default: module_4583 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4583;
}
module_4583 = tmp7;
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
  return module_4583.default(arg0, module_4580.default(arg0) + module_4427.default(arg1));
};
export default exports.default;