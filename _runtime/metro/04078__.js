// === Module 4078: ? ===

// Module 4078
import module_3922_mod from "module_3922" /* 3922 */;
import _typeof_mod from "module_3918" /* 3918 */;
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4079 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4080 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
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
  const defaultResult2 = module_3922.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfISOWeekYear.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + differenceInCalendarDays.default(defaultResult1, startOfISOWeekYear.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;