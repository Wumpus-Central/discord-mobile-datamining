// === Module 3901: startOfUTCISOWeekYear ===

// Module 3901 (startOfUTCISOWeekYear)
import module_3902 from "module_3902" /* 3902 */;
import startOfUTCISOWeek from "startOfUTCISOWeek" /* 3900 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3902) {
  let obj = { default: module_3902 };
  let tmp3 = obj;
} else {
  tmp3 = module_3902;
}
module_3902 = tmp3;
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
  date.setUTCFullYear(module_3902.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;