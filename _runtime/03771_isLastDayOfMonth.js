// === Module 3771: isLastDayOfMonth ===

// Module 3771 (isLastDayOfMonth)
import _typeof from "_typeof" /* 3572 */;
import endOfDay from "endOfDay" /* 3772 */;
import endOfMonth from "endOfMonth" /* 3773 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!endOfDay) {
  obj = { default: null };
  obj[0] = endOfDay;
  let tmp5 = obj;
} else {
  tmp5 = endOfDay;
}
endOfDay = tmp5;
if (!endOfMonth) {
  obj = { default: null };
  obj[0] = endOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
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