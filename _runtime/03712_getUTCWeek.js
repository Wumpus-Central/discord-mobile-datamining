// _runtime/03712_getUTCWeek.js
import _typeof from "metro/03472__typeof.js";
import startOfUTCWeek from "03475_startOfUTCWeek.js";
import startOfUTCWeekYear from "03713_startOfUTCWeekYear.js";
import requiredArgs from "03473_requiredArgs.js";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfUTCWeek) {
  obj = { default: null };
  obj[0] = startOfUTCWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;
if (!startOfUTCWeekYear) {
  obj = { default: null };
  obj[0] = startOfUTCWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCWeekYear;
}
startOfUTCWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
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