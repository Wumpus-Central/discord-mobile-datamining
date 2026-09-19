// _runtime/04280_subHours.js
import module_3999_mod from "metro/03999__.js";
import requiredArgs_mod from "03846_requiredArgs.js";
import module_3849_mod from "metro/03849__.js";

let module_3999 = module_3999_mod;
if (!module_3999) {
  const obj = { default: module_3999 };
  let tmp3 = obj;
} else {
  tmp3 = module_3999;
}
module_3999 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj3 = { default: module_3849 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3849;
}
module_3849 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3999.default(arg0, -module_3849.default(arg1));
};
export default exports.default;