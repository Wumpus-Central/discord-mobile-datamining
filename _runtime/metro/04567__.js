// _runtime/metro/04567__.js
import startOfISOWeekYear_mod from "../04455_startOfISOWeekYear.js";
import module_4462_mod from "04462__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_4462 = module_4462_mod;
if (!module_4462) {
  const obj2 = { default: module_4462 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4462;
}
module_4462 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_4462.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_4462.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;