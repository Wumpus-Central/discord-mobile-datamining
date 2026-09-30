// _runtime/metro/04104__.js
import module_3952_mod from "03952__.js";
import module_4105_mod from "04105__.js";
import module_4108_mod from "04108__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let module_4105 = module_4105_mod;
if (!module_4105) {
  const obj2 = { default: module_4105 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4105;
}
module_4105 = tmp5;
let module_4108 = module_4108_mod;
if (!module_4108) {
  const obj3 = { default: module_4108 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4108;
}
module_4108 = tmp7;
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
  return module_4108.default(arg0, module_4105.default(arg0) + module_3952.default(arg1));
};
export default exports.default;