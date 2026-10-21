// _runtime/04623_subDays.js
import module_4400_mod from "metro/04400__.js";
import requiredArgs_mod from "04253_requiredArgs.js";
import module_4256_mod from "metro/04256__.js";

let module_4400 = module_4400_mod;
if (!module_4400) {
  const obj = { default: module_4400 };
  let tmp3 = obj;
} else {
  tmp3 = module_4400;
}
module_4400 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj3 = { default: module_4256 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4256;
}
module_4256 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4400.default(arg0, -module_4256.default(arg1));
};
export default exports.default;