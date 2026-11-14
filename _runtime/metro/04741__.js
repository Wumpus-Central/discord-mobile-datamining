// _runtime/metro/04741__.js
import module_4589_mod from "04589__.js";
import module_4742_mod from "04742__.js";
import module_4745_mod from "04745__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let module_4742 = module_4742_mod;
if (!module_4742) {
  const obj2 = { default: module_4742 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4742;
}
module_4742 = tmp5;
let module_4745 = module_4745_mod;
if (!module_4745) {
  const obj3 = { default: module_4745 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4745;
}
module_4745 = tmp7;
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
  return module_4745.default(arg0, module_4742.default(arg0) + module_4589.default(arg1));
};
export default exports.default;