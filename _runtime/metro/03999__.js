// _runtime/metro/03999__.js
import startOfISOWeekYear_mod from "../03887_startOfISOWeekYear.js";
import module_3894_mod from "03894__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_3894 = module_3894_mod;
if (!module_3894) {
  const obj2 = { default: module_3894 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3894;
}
module_3894 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_3894.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3894.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;