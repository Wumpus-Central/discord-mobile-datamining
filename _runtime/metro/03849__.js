// === Module 3849: ? ===

// Module 3849
import _typeof from "module_3650" /* 3650 */;
import endOfDay from "endOfDay" /* 3850 */;
import endOfMonth from "endOfMonth" /* 3851 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!endOfDay) {
  obj = { default: endOfDay };
  let tmp5 = obj;
} else {
  tmp5 = endOfDay;
}
endOfDay = tmp5;
if (!endOfMonth) {
  obj = { default: endOfMonth };
  let tmp7 = obj;
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function isLastDayOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = endOfDay.default(defaultResult1).getTime();
  const defaultResult2 = endOfDay.default(defaultResult1);
  return time === endOfMonth.default(defaultResult1).getTime();
};
export default exports.default;