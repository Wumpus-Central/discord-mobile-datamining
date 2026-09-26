// _runtime/metro/04086__.js
import module_3922_mod from "03922__.js";
import module_4066_mod from "04066__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj2 = { default: module_4066 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4066;
}
module_4066 = tmp5;
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
  return module_4066.default(arg0, 7 * module_3922.default(arg1));
};
export default exports.default;