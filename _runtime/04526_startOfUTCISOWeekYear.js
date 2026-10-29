// _runtime/04526_startOfUTCISOWeekYear.js
import module_4527_mod from "metro/04527__.js";
import startOfUTCISOWeek_mod from "04525_startOfUTCISOWeek.js";
import requiredArgs_mod from "04289_requiredArgs.js";

let module_4527 = module_4527_mod;
if (!module_4527) {
  const obj = { default: module_4527 };
  let tmp3 = obj;
} else {
  tmp3 = module_4527;
}
module_4527 = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  const obj2 = { default: startOfUTCISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(module_4527.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;