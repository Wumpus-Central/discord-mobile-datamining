// _runtime/05023_subSeconds.js
import module_4589_mod from "metro/04589__.js";
import module_4752_mod from "metro/04752__.js";
import requiredArgs_mod from "04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let module_4752 = module_4752_mod;
if (!module_4752) {
  const obj2 = { default: module_4752 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4752;
}
module_4752 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4752.default(arg0, -module_4589.default(arg1));
};
export default exports.default;