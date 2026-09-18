// _runtime/metro/04051__.js
import _typeof_mod from "03811__.js";
import startOfUTCWeek_mod from "../03814_startOfUTCWeek.js";
import startOfUTCWeekYear_mod from "../04052_startOfUTCWeekYear.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  const obj2 = { default: startOfUTCWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;
let startOfUTCWeekYear = startOfUTCWeekYear_mod;
if (!startOfUTCWeekYear) {
  const obj3 = { default: startOfUTCWeekYear };
  let tmp7 = obj3;
} else {
  tmp7 = startOfUTCWeekYear;
}
startOfUTCWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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