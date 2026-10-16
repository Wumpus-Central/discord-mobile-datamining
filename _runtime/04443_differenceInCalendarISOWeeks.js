// _runtime/04443_differenceInCalendarISOWeeks.js
import module_4421_mod from "metro/04421__.js";
import startOfISOWeek_mod from "04416_startOfISOWeek.js";
import requiredArgs_mod from "04259_requiredArgs.js";

let module_4421 = module_4421_mod;
if (!module_4421) {
  const obj = { default: module_4421 };
  let tmp3 = obj;
} else {
  tmp3 = module_4421;
}
module_4421 = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarISOWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeek.default(arg0);
  const defaultResult2 = startOfISOWeek.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_4421.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4421.default(defaultResult2))) / c3);
};
export default exports.default;