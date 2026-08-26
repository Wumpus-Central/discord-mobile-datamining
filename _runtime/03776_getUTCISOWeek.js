// _runtime/03776_getUTCISOWeek.js
import _typeof from "metro/03540__typeof.js";
import startOfUTCISOWeek from "03777_startOfUTCISOWeek.js";
import startOfUTCISOWeekYear from "03778_startOfUTCISOWeekYear.js";
import requiredArgs from "03541_requiredArgs.js";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
if (!startOfUTCISOWeekYear) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCISOWeekYear;
}
startOfUTCISOWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getUTCISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = startOfUTCISOWeek.default(defaultResult1).getTime();
  const defaultResult2 = startOfUTCISOWeek.default(defaultResult1);
  return Math.round((time - startOfUTCISOWeekYear.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;