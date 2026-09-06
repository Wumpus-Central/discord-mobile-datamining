// _runtime/03855_differenceInYears.js
import _typeof from "metro/03650__.js";
import differenceInCalendarYears from "03840_differenceInCalendarYears.js";
import compareAsc from "03826_compareAsc.js";
import requiredArgs from "03651_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!differenceInCalendarYears) {
  obj = { default: differenceInCalendarYears };
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarYears;
}
differenceInCalendarYears = tmp5;
if (!compareAsc) {
  obj = { default: compareAsc };
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function differenceInYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarYears.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(compareAsc.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;