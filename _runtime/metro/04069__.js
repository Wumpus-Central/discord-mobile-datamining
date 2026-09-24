// _runtime/metro/04069__.js
import module_3917_mod from "03917__.js";
import module_4070_mod from "04070__.js";
import module_4073_mod from "04073__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj2 = { default: module_4070 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4070;
}
module_4070 = tmp5;
let module_4073 = module_4073_mod;
if (!module_4073) {
  const obj3 = { default: module_4073 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4073;
}
module_4073 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4073.default(arg0, module_4070.default(arg0) + module_3917.default(arg1));
};
export default exports.default;