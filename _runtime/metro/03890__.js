// === Module 3890: ? ===

// Module 3890
import _typeof from "module_3650" /* 3650 */;
import startOfUTCWeek from "startOfUTCWeek" /* 3653 */;
import startOfUTCWeekYear from "startOfUTCWeekYear" /* 3891 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfUTCWeek) {
  obj = { default: startOfUTCWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;
if (!startOfUTCWeekYear) {
  obj = { default: startOfUTCWeekYear };
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCWeekYear;
}
startOfUTCWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getUTCWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = startOfUTCWeek.default(defaultResult1, arg1).getTime();
  const defaultResult2 = startOfUTCWeek.default(defaultResult1, arg1);
  return Math.round((time - startOfUTCWeekYear.default(defaultResult1, arg1).getTime()) / c4) + 1;
};
export default exports.default;