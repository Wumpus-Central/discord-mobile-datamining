// _runtime/04282_setUTCWeek.js
import toInteger_mod from "03968_toInteger.js";
import toDate_mod from "03964_toDate.js";
import getUTCWeek_mod from "04204_getUTCWeek.js";
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
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let getUTCWeek = getUTCWeek_mod;
if (!getUTCWeek) {
  tmp7 = { default: getUTCWeek };
  const obj3 = { default: getUTCWeek };
} else {
  tmp7 = getUTCWeek;
}
getUTCWeek = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const diff = getUTCWeek.default(defaultResult1, arg2) - defaultResult2;
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
}
