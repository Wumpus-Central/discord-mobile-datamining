// === Module 4384: setISOWeek ===

// Module 4384 (setISOWeek)
import toInteger_mod from "toInteger" /* 3968 */;
import toDate_mod from "toDate" /* 3964 */;
import getISOWeek_mod from "getISOWeek" /* 4236 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

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
let getISOWeek = getISOWeek_mod;
if (!getISOWeek) {
  tmp7 = { default: getISOWeek };
  const obj3 = { default: getISOWeek };
} else {
  tmp7 = getISOWeek;
}
getISOWeek = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const diff = getISOWeek.default(defaultResult1) - defaultResult2;
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};