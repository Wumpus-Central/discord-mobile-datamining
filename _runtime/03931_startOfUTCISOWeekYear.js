// _runtime/03931_startOfUTCISOWeekYear.js
import 03932__ from "metro/03932__.js";
import startOfUTCISOWeek from "03930_startOfUTCISOWeek.js";
import requiredArgs from "03694_requiredArgs.js";

if (!module_3932) {
  let obj = { default: module_3932 };
  let tmp3 = obj;
} else {
  tmp3 = module_3932;
}
module_3932 = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: startOfUTCISOWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(module_3932.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;