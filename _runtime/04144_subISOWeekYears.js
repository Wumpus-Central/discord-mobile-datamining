// _runtime/04144_subISOWeekYears.js
import module_4104_mod from "metro/04104__.js";
import requiredArgs_mod from "03949_requiredArgs.js";
import module_3952_mod from "metro/03952__.js";

let module_4104 = module_4104_mod;
if (!module_4104) {
  const obj = { default: module_4104 };
  let tmp3 = obj;
} else {
  tmp3 = module_4104;
}
module_4104 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj3 = { default: module_3952 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3952;
}
module_3952 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4104.default(arg0, -module_3952.default(arg1));
};
export default exports.default;