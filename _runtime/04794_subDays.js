// _runtime/04794_subDays.js
import module_4571_mod from "metro/04571__.js";
import requiredArgs_mod from "04424_requiredArgs.js";
import module_4427_mod from "metro/04427__.js";

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
let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj3 = { default: module_4427 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4427;
}
module_4427 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4571.default(arg0, -module_4427.default(arg1));
};
export default exports.default;