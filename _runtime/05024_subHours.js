// _runtime/05024_subHours.js
import module_4743_mod from "metro/04743__.js";
import requiredArgs_mod from "04590_requiredArgs.js";
import module_4593_mod from "metro/04593__.js";

let module_4743 = module_4743_mod;
if (!module_4743) {
  const obj = { default: module_4743 };
  let tmp3 = obj;
} else {
  tmp3 = module_4743;
}
module_4743 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj3 = { default: module_4593 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4593;
}
module_4593 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4743.default(arg0, -module_4593.default(arg1));
};
export default exports.default;