// _runtime/04041_subISOWeekYears.js
import module_4001_mod from "metro/04001__.js";
import requiredArgs_mod from "03846_requiredArgs.js";
import module_3849_mod from "metro/03849__.js";

let module_4001 = module_4001_mod;
if (!module_4001) {
  const obj = { default: module_4001 };
  let tmp3 = obj;
} else {
  tmp3 = module_4001;
}
module_4001 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj3 = { default: module_3849 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3849;
}
module_3849 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4001.default(arg0, -module_3849.default(arg1));
};
export default exports.default;