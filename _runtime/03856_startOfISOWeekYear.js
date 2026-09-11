// _runtime/03856_startOfISOWeekYear.js
import 03852__ from "metro/03852__.js";
import startOfISOWeek from "03853_startOfISOWeek.js";
import requiredArgs from "03696_requiredArgs.js";

if (!module_3852) {
  let obj = { default: module_3852 };
  let tmp3 = obj;
} else {
  tmp3 = module_3852;
}
module_3852 = tmp3;
if (!startOfISOWeek) {
  obj = { default: startOfISOWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_3852.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;