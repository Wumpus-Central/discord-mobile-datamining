// _runtime/03963_startOfUTCISOWeekYear.js
import 03964__ from "metro/03964__.js";
import startOfUTCISOWeek from "03962_startOfUTCISOWeek.js";
import requiredArgs from "03726_requiredArgs.js";

if (!module_3964) {
  let obj = { default: module_3964 };
  let tmp3 = obj;
} else {
  tmp3 = module_3964;
}
module_3964 = tmp3;
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
  date.setUTCFullYear(module_3964.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;