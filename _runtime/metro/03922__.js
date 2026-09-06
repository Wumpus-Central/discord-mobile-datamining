// === Module 3922: ? ===

// Module 3922
import _typeof from "module_3650" /* 3650 */;
import startOfISOWeek from "startOfISOWeek" /* 3808 */;
import startOfISOWeekYear from "startOfISOWeekYear" /* 3811 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfISOWeek) {
  obj = { default: startOfISOWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
if (!startOfISOWeekYear) {
  obj = { default: startOfISOWeekYear };
  let tmp7 = obj;
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = startOfISOWeek.default(defaultResult1).getTime();
  const defaultResult2 = startOfISOWeek.default(defaultResult1);
  return Math.round((time - startOfISOWeekYear.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;