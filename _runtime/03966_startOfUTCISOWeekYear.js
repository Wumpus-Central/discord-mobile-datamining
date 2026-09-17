// _runtime/03966_startOfUTCISOWeekYear.js
import module_3967_mod from "metro/03967__.js";
import startOfUTCISOWeek_mod from "03965_startOfUTCISOWeek.js";
import requiredArgs_mod from "03729_requiredArgs.js";

let module_3967 = module_3967_mod;
if (!module_3967) {
  const obj = { default: module_3967 };
  let tmp3 = obj;
} else {
  tmp3 = module_3967;
}
module_3967 = tmp3;
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
  date.setUTCFullYear(module_3967.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;