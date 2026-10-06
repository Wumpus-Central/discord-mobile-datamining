// _runtime/04236_getISOWeek.js
import toDate_mod from "03964_toDate.js";
import startOfISOWeek_mod from "04122_startOfISOWeek.js";
import startOfISOWeekYear_mod from "04125_startOfISOWeekYear.js";
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
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  tmp5 = { default: startOfISOWeek };
  const obj2 = { default: startOfISOWeek };
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  tmp7 = { default: startOfISOWeekYear };
  const obj3 = { default: startOfISOWeekYear };
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = startOfISOWeek.default(defaultResult1);
  const time = defaultResult2.getTime();
  const defaultResult3 = startOfISOWeekYear.default(defaultResult1);
  return Math.round((time - defaultResult3.getTime()) / c4) + 1;
}
