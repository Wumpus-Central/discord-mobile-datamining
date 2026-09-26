// _runtime/04151_subMilliseconds.js
import module_4073_mod from "metro/04073__.js";
import requiredArgs_mod from "03919_requiredArgs.js";
import module_3922_mod from "metro/03922__.js";

let module_4073 = module_4073_mod;
if (!module_4073) {
  const obj = { default: module_4073 };
  let tmp3 = obj;
} else {
  tmp3 = module_4073;
}
module_4073 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj3 = { default: module_3922 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3922;
}
module_3922 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4073.default(arg0, -module_3922.default(arg1));
};
export default exports.default;