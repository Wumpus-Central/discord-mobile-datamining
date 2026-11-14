// _runtime/04956_subDays.js
import module_4733_mod from "metro/04733__.js";
import requiredArgs_mod from "04586_requiredArgs.js";
import module_4589_mod from "metro/04589__.js";

let module_4733 = module_4733_mod;
if (!module_4733) {
  const obj = { default: module_4733 };
  let tmp3 = obj;
} else {
  tmp3 = module_4733;
}
module_4733 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj3 = { default: module_4589 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4589;
}
module_4589 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4733.default(arg0, -module_4589.default(arg1));
};
export default exports.default;