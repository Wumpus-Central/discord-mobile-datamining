// _runtime/04438_differenceInCalendarISOWeekYears.js
import module_4411_mod from "metro/04411__.js";
import requiredArgs_mod from "04255_requiredArgs.js";

let module_4411 = module_4411_mod;
if (!module_4411) {
  const obj = { default: module_4411 };
  let tmp3 = obj;
} else {
  tmp3 = module_4411;
}
module_4411 = tmp3;
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
  return module_4411.default(arg0) - module_4411.default(arg1);
};
export default exports.default;