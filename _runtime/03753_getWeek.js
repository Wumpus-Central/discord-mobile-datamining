// _runtime/03753_getWeek.js
import startOfWeek from "03631_startOfWeek.js";
import startOfWeekYear from "03754_startOfWeekYear.js";
import _typeof from "metro/03472__typeof.js";
import requiredArgs from "03473_requiredArgs.js";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!startOfWeekYear) {
  obj = { default: null };
  obj[0] = startOfWeekYear;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
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