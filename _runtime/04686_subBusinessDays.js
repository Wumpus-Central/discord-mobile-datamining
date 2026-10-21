// _runtime/04686_subBusinessDays.js
import module_4402_mod from "metro/04402__.js";
import requiredArgs_mod from "04253_requiredArgs.js";
import module_4256_mod from "metro/04256__.js";

let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj = { default: module_4402 };
  let tmp3 = obj;
} else {
  tmp3 = module_4402;
}
module_4402 = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4402.default(arg0, -module_4256.default(arg1));
};
export default exports.default;