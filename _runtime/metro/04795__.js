// _runtime/metro/04795__.js
import startOfISOWeekYear_mod from "../04683_startOfISOWeekYear.js";
import module_4690_mod from "04690__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_4690 = module_4690_mod;
if (!module_4690) {
  const obj2 = { default: module_4690 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4690;
}
module_4690 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(module_4690.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_4690.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;