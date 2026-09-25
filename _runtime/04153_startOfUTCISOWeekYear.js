// _runtime/04153_startOfUTCISOWeekYear.js
import module_4154_mod from "metro/04154__.js";
import startOfUTCISOWeek_mod from "04152_startOfUTCISOWeek.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let module_4154 = module_4154_mod;
if (!module_4154) {
  const obj = { default: module_4154 };
  let tmp3 = obj;
} else {
  tmp3 = module_4154;
}
module_4154 = tmp3;
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
  date.setUTCFullYear(module_4154.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;