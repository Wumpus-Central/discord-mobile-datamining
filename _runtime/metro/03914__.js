// _runtime/metro/03914__.js
import _typeof from "03650__.js";
import startOfYear from "../03869_startOfYear.js";
import differenceInCalendarDays from "../03812_differenceInCalendarDays.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfYear) {
  obj = { default: startOfYear };
  let tmp5 = obj;
} else {
  tmp5 = startOfYear;
}
startOfYear = tmp5;
if (!differenceInCalendarDays) {
  obj = { default: differenceInCalendarDays };
  let tmp7 = obj;
} else {
  tmp7 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getDayOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return differenceInCalendarDays.default(defaultResult1, startOfYear.default(defaultResult1)) + 1;
};
export default exports.default;