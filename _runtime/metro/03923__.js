// _runtime/metro/03923__.js
import startOfISOWeekYear from "../03811_startOfISOWeekYear.js";
import 03818__ from "03818__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!startOfISOWeekYear) {
  let obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!module_3818) {
  obj = { default: module_3818 };
  let tmp5 = obj;
} else {
  tmp5 = module_3818;
}
module_3818 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(module_3818.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3818.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;