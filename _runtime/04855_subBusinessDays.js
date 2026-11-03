// _runtime/04855_subBusinessDays.js
import module_4571_mod from "metro/04571__.js";
import requiredArgs_mod from "04422_requiredArgs.js";
import module_4425_mod from "metro/04425__.js";

let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj = { default: module_4571 };
  let tmp3 = obj;
} else {
  tmp3 = module_4571;
}
module_4571 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj3 = { default: module_4425 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4425;
}
module_4425 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4571.default(arg0, -module_4425.default(arg1));
};
export default exports.default;