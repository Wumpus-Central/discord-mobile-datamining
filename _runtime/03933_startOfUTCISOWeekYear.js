// _runtime/03933_startOfUTCISOWeekYear.js
import 03934__ from "metro/03934__.js";
import startOfUTCISOWeek from "03932_startOfUTCISOWeek.js";
import requiredArgs from "03696_requiredArgs.js";

if (!module_3934) {
  let obj = { default: module_3934 };
  let tmp3 = obj;
} else {
  tmp3 = module_3934;
}
module_3934 = tmp3;
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
  date.setUTCFullYear(module_3934.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;