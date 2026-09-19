// === Module 4050: differenceInYears ===

// Module 4050 (differenceInYears)
import _typeof_mod from "module_3845" /* 3845 */;
import differenceInCalendarYears_mod from "differenceInCalendarYears" /* 4035 */;
import compareAsc_mod from "compareAsc" /* 4021 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let differenceInCalendarYears = differenceInCalendarYears_mod;
if (!differenceInCalendarYears) {
  const obj2 = { default: differenceInCalendarYears };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarYears;
}
differenceInCalendarYears = tmp5;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  const obj3 = { default: compareAsc };
  let tmp7 = obj3;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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