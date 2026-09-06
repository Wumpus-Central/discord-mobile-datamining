// _runtime/03888_startOfUTCISOWeekYear.js
import 03889__ from "metro/03889__.js";
import startOfUTCISOWeek from "03887_startOfUTCISOWeek.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3889) {
  let obj = { default: module_3889 };
  let tmp3 = obj;
} else {
  tmp3 = module_3889;
}
module_3889 = tmp3;
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
  date.setUTCFullYear(module_3889.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;