// _runtime/metro/03853__.js
import 03697__ from "03697__.js";
import _typeof from "03693__.js";
import startOfISOWeekYear from "../03854_startOfISOWeekYear.js";
import differenceInCalendarDays from "../03855_differenceInCalendarDays.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!startOfISOWeekYear) {
  obj = { default: startOfISOWeekYear };
  let tmp7 = obj;
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
if (!differenceInCalendarDays) {
  const obj1 = { default: differenceInCalendarDays };
  let tmp9 = obj1;
} else {
  tmp9 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp9;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3697.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfISOWeekYear.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + differenceInCalendarDays.default(defaultResult1, startOfISOWeekYear.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;