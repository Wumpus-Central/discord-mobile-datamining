// _runtime/05029_subYears.js
import module_4593_mod from "metro/04593__.js";
import module_4758_mod from "metro/04758__.js";
import requiredArgs_mod from "04590_requiredArgs.js";

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let module_4758 = module_4758_mod;
if (!module_4758) {
  const obj2 = { default: module_4758 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4758;
}
module_4758 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4758.default(arg0, -module_4593.default(arg1));
};
export default exports.default;