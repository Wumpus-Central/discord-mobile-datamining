// _runtime/metro/03998__.js
import startOfISOWeekYear from "../03886_startOfISOWeekYear.js";
import 03893__ from "03893__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!startOfISOWeekYear) {
  let obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!module_3893) {
  obj = { default: module_3893 };
  let tmp5 = obj;
} else {
  tmp5 = module_3893;
}
module_3893 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_3893.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3893.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;