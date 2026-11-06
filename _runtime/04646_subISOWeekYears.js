// _runtime/04646_subISOWeekYears.js
import module_4606_mod from "metro/04606__.js";
import requiredArgs_mod from "04451_requiredArgs.js";
import module_4454_mod from "metro/04454__.js";

let module_4606 = module_4606_mod;
if (!module_4606) {
  const obj = { default: module_4606 };
  let tmp3 = obj;
} else {
  tmp3 = module_4606;
}
module_4606 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj3 = { default: module_4454 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4454;
}
module_4454 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4606.default(arg0, -module_4454.default(arg1));
};
export default exports.default;