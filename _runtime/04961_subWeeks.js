// _runtime/04961_subWeeks.js
import module_4526_mod from "metro/04526__.js";
import module_4690_mod from "metro/04690__.js";
import requiredArgs_mod from "04523_requiredArgs.js";

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let module_4690 = module_4690_mod;
if (!module_4690) {
  const obj2 = { default: module_4690 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4690;
}
module_4690 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4690.default(arg0, -module_4526.default(arg1));
};
export default exports.default;