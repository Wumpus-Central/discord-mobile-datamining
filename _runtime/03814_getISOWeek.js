// _runtime/03814_getISOWeek.js
import _typeof from "metro/03542__typeof.js";
import startOfISOWeek from "03700_startOfISOWeek.js";
import startOfISOWeekYear from "03703_startOfISOWeekYear.js";
import requiredArgs from "03543_requiredArgs.js";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfISOWeek) {
  obj = { default: null };
  obj[0] = startOfISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
if (!startOfISOWeekYear) {
  obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
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