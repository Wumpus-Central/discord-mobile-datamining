// _runtime/04884_subBusinessDays.js
import module_4600_mod from "metro/04600__.js";
import requiredArgs_mod from "04451_requiredArgs.js";
import module_4454_mod from "metro/04454__.js";

let module_4600 = module_4600_mod;
if (!module_4600) {
  const obj = { default: module_4600 };
  let tmp3 = obj;
} else {
  tmp3 = module_4600;
}
module_4600 = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4600.default(arg0, -module_4454.default(arg1));
};
export default exports.default;