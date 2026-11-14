// _runtime/05025_subYears.js
import module_4589_mod from "metro/04589__.js";
import module_4754_mod from "metro/04754__.js";
import requiredArgs_mod from "04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let module_4754 = module_4754_mod;
if (!module_4754) {
  const obj2 = { default: module_4754 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4754;
}
module_4754 = tmp5;
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
  return module_4754.default(arg0, -module_4589.default(arg1));
};
export default exports.default;