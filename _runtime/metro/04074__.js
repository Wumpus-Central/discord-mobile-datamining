// _runtime/metro/04074__.js
import module_3922_mod from "03922__.js";
import module_4075_mod from "04075__.js";
import module_4078_mod from "04078__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let module_4075 = module_4075_mod;
if (!module_4075) {
  const obj2 = { default: module_4075 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4075;
}
module_4075 = tmp5;
let module_4078 = module_4078_mod;
if (!module_4078) {
  const obj3 = { default: module_4078 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4078;
}
module_4078 = tmp7;
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
  return module_4078.default(arg0, module_4075.default(arg0) + module_3922.default(arg1));
};
export default exports.default;