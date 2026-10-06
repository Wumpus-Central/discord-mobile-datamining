// === Module 4112: addDays ===

// Module 4112 (addDays)
import toInteger_mod from "toInteger" /* 3968 */;
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  if (isNaN(defaultResult2)) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    defaultResult1.setDate(defaultResult1.getDate() + defaultResult2);
    return defaultResult1;
  } else {
    return defaultResult1;
  }
};