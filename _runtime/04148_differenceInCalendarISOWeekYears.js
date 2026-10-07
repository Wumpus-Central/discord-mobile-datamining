// _runtime/04148_differenceInCalendarISOWeekYears.js
import module_4121_mod from "metro/04121__.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let module_4121 = module_4121_mod;
if (!module_4121) {
  const obj = { default: module_4121 };
  let tmp3 = obj;
} else {
  tmp3 = module_4121;
}
module_4121 = tmp3;
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
  return module_4121.default(arg0) - module_4121.default(arg1);
};
export default exports.default;