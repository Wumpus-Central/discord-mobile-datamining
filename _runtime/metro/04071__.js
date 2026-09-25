// _runtime/metro/04071__.js
import module_3919_mod from "03919__.js";
import module_4072_mod from "04072__.js";
import module_4075_mod from "04075__.js";
import requiredArgs_mod from "../03916_requiredArgs.js";

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4072 = module_4072_mod;
if (!module_4072) {
  const obj2 = { default: module_4072 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4072;
}
module_4072 = tmp5;
let module_4075 = module_4075_mod;
if (!module_4075) {
  const obj3 = { default: module_4075 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4075;
}
module_4075 = tmp7;
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
  return module_4075.default(arg0, module_4072.default(arg0) + module_3919.default(arg1));
};
export default exports.default;