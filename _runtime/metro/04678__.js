// _runtime/metro/04678__.js
import module_4526_mod from "04526__.js";
import module_4679_mod from "04679__.js";
import module_4682_mod from "04682__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let module_4679 = module_4679_mod;
if (!module_4679) {
  const obj2 = { default: module_4679 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4679;
}
module_4679 = tmp5;
let module_4682 = module_4682_mod;
if (!module_4682) {
  const obj3 = { default: module_4682 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4682;
}
module_4682 = tmp7;
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
  return module_4682.default(arg0, module_4679.default(arg0) + module_4526.default(arg1));
};
export default exports.default;