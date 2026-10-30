// === Module 4449: ? ===

// Module 4449
import module_4293_mod from "module_4293" /* 4293 */;
import _typeof_mod from "module_4289" /* 4289 */;
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4450 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4451 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj3 = { default: startOfISOWeekYear };
  let tmp7 = obj3;
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj4 = { default: differenceInCalendarDays };
  let tmp9 = obj4;
} else {
  tmp9 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_4293.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfISOWeekYear.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + differenceInCalendarDays.default(defaultResult1, startOfISOWeekYear.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;