// _runtime/metro/04420__.js
import module_4256_mod from "04256__.js";
import module_4400_mod from "04400__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
let module_4400 = module_4400_mod;
if (!module_4400) {
  const obj2 = { default: module_4400 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4400;
}
module_4400 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4400.default(arg0, 7 * module_4256.default(arg1));
};
export default exports.default;