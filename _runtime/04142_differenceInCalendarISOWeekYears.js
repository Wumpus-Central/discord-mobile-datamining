// _runtime/04142_differenceInCalendarISOWeekYears.js
import module_4115_mod from "metro/04115__.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj = { default: module_4115 };
  let tmp3 = obj;
} else {
  tmp3 = module_4115;
}
module_4115 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4115.default(arg0) - module_4115.default(arg1);
};
export default exports.default;