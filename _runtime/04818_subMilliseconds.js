// _runtime/04818_subMilliseconds.js
import module_4740_mod from "metro/04740__.js";
import requiredArgs_mod from "04586_requiredArgs.js";
import module_4589_mod from "metro/04589__.js";

let module_4740 = module_4740_mod;
if (!module_4740) {
  const obj = { default: module_4740 };
  let tmp3 = obj;
} else {
  tmp3 = module_4740;
}
module_4740 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4740.default(arg0, -module_4589.default(arg1));
};
export default exports.default;