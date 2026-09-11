// === Module 3968: ? ===

// Module 3968
import startOfISOWeekYear from "startOfISOWeekYear" /* 3856 */;
import module_3863 from "module_3863" /* 3863 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!startOfISOWeekYear) {
  let obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!module_3863) {
  obj = { default: module_3863 };
  let tmp5 = obj;
} else {
  tmp5 = module_3863;
}
module_3863 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_3863.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3863.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;