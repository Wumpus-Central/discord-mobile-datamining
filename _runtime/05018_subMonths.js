// _runtime/05018_subMonths.js
import module_4589_mod from "metro/04589__.js";
import module_4734_mod from "metro/04734__.js";
import requiredArgs_mod from "04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let module_4734 = module_4734_mod;
if (!module_4734) {
  const obj2 = { default: module_4734 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4734;
}
module_4734 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4734.default(arg0, -module_4589.default(arg1));
};
export default exports.default;