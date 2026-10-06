// _runtime/04120_addISOWeekYears.js
import toInteger_mod from "03968_toInteger.js";
import getISOWeekYear_mod from "04121_getISOWeekYear.js";
import setISOWeekYear_mod from "04124_setISOWeekYear.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let getISOWeekYear = getISOWeekYear_mod;
if (!getISOWeekYear) {
  tmp5 = { default: getISOWeekYear };
  const obj2 = { default: getISOWeekYear };
} else {
  tmp5 = getISOWeekYear;
}
getISOWeekYear = tmp5;
let setISOWeekYear = setISOWeekYear_mod;
if (!setISOWeekYear) {
  tmp7 = { default: setISOWeekYear };
  const obj3 = { default: setISOWeekYear };
} else {
  tmp7 = setISOWeekYear;
}
setISOWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toInteger.default(arg1);
  return setISOWeekYear.default(arg0, getISOWeekYear.default(arg0) + defaultResult1);
}
