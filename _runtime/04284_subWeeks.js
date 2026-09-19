// _runtime/04284_subWeeks.js
import module_3849_mod from "metro/03849__.js";
import module_4013_mod from "metro/04013__.js";
import requiredArgs_mod from "03846_requiredArgs.js";

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_4013 = module_4013_mod;
if (!module_4013) {
  const obj2 = { default: module_4013 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4013;
}
module_4013 = tmp5;
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
  return module_4013.default(arg0, -module_3849.default(arg1));
};
export default exports.default;