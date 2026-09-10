// === Module 3974: ? ===

// Module 3974
import startOfWeek from "startOfWeek" /* 3852 */;
import startOfWeekYear from "startOfWeekYear" /* 3975 */;
import _typeof from "module_3693" /* 3693 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!startOfWeek) {
  let obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!startOfWeekYear) {
  obj = { default: startOfWeekYear };
  let tmp5 = obj;
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = startOfWeek.default(defaultResult1, arg1).getTime();
  const defaultResult2 = startOfWeek.default(defaultResult1, arg1);
  return Math.round((time - startOfWeekYear.default(defaultResult1, arg1).getTime()) / c4) + 1;
};
export default exports.default;