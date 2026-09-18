// === Module 4083: ? ===

// Module 4083
import _typeof_mod from "module_3811" /* 3811 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 3969 */;
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 3972 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj3 = { default: startOfISOWeekYear };
  let tmp7 = obj3;
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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