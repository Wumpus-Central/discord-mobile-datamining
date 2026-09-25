// _runtime/metro/04196__.js
import startOfWeek_mod from "../04074_startOfWeek.js";
import startOfWeekYear_mod from "../04197_startOfWeekYear.js";
import _typeof_mod from "03915__.js";
import requiredArgs_mod from "../03916_requiredArgs.js";

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let startOfWeekYear = startOfWeekYear_mod;
if (!startOfWeekYear) {
  const obj2 = { default: startOfWeekYear };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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