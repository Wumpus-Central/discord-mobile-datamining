// _runtime/metro/03966__.js
import startOfISOWeekYear from "../03854_startOfISOWeekYear.js";
import 03861__ from "03861__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!startOfISOWeekYear) {
  let obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!module_3861) {
  obj = { default: module_3861 };
  let tmp5 = obj;
} else {
  tmp5 = module_3861;
}
module_3861 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_3861.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3861.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;