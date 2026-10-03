// _runtime/04154_subISOWeekYears.js
import module_4114_mod from "metro/04114__.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import module_3962_mod from "metro/03962__.js";

let module_4114 = module_4114_mod;
if (!module_4114) {
  const obj = { default: module_4114 };
  let tmp3 = obj;
} else {
  tmp3 = module_4114;
}
module_4114 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj3 = { default: module_3962 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3962;
}
module_3962 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4114.default(arg0, -module_3962.default(arg1));
};
export default exports.default;