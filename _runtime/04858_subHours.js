// _runtime/04858_subHours.js
import module_4577_mod from "metro/04577__.js";
import requiredArgs_mod from "04424_requiredArgs.js";
import module_4427_mod from "metro/04427__.js";

let module_4577 = module_4577_mod;
if (!module_4577) {
  const obj = { default: module_4577 };
  let tmp3 = obj;
} else {
  tmp3 = module_4577;
}
module_4577 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4577.default(arg0, -module_4427.default(arg1));
};
export default exports.default;