// === Module 4010: ? ===

// Module 4010
import _typeof_mod from "module_3811" /* 3811 */;
import endOfDay_mod from "endOfDay" /* 4011 */;
import endOfMonth_mod from "endOfMonth" /* 4012 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let endOfDay = endOfDay_mod;
if (!endOfDay) {
  const obj2 = { default: endOfDay };
  let tmp5 = obj2;
} else {
  tmp5 = endOfDay;
}
endOfDay = tmp5;
let endOfMonth = endOfMonth_mod;
if (!endOfMonth) {
  const obj3 = { default: endOfMonth };
  let tmp7 = obj3;
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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