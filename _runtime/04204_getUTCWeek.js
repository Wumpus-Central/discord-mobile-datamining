// _runtime/04204_getUTCWeek.js
import toDate_mod from "03964_toDate.js";
import startOfUTCWeek_mod from "03967_startOfUTCWeek.js";
import startOfUTCWeekYear_mod from "04205_startOfUTCWeekYear.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  tmp5 = { default: startOfUTCWeek };
  const obj2 = { default: startOfUTCWeek };
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;
let startOfUTCWeekYear = startOfUTCWeekYear_mod;
if (!startOfUTCWeekYear) {
  tmp7 = { default: startOfUTCWeekYear };
  const obj3 = { default: startOfUTCWeekYear };
} else {
  tmp7 = startOfUTCWeekYear;
}
startOfUTCWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getUTCWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = startOfUTCWeek.default(defaultResult1, arg1);
  const time = defaultResult2.getTime();
  const defaultResult3 = startOfUTCWeekYear.default(defaultResult1, arg1);
  return Math.round((time - defaultResult3.getTime()) / c4) + 1;
}
