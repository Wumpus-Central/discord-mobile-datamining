// === Module 3929: ? ===

// Module 3929
import _typeof from "module_3693" /* 3693 */;
import startOfUTCISOWeek from "startOfUTCISOWeek" /* 3930 */;
import startOfUTCISOWeekYear from "startOfUTCISOWeekYear" /* 3931 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: startOfUTCISOWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
if (!startOfUTCISOWeekYear) {
  obj = { default: startOfUTCISOWeekYear };
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCISOWeekYear;
}
startOfUTCISOWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getUTCISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = startOfUTCISOWeek.default(defaultResult1).getTime();
  const defaultResult2 = startOfUTCISOWeek.default(defaultResult1);
  return Math.round((time - startOfUTCISOWeekYear.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;