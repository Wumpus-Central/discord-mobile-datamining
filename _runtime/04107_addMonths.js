// === Module 4107: addMonths ===

// Module 4107 (addMonths)
import toInteger_mod from "toInteger" /* 3962 */;
import toDate_mod from "toDate" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

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

export default function addMonths(interval, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(interval);
  const defaultResult2 = toInteger.default(arg1);
  if (isNaN(defaultResult2)) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    const date1 = defaultResult1.getDate();
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date2 = new Date(defaultResult1.getTime());
    date2.setMonth(defaultResult1.getMonth() + defaultResult2 + 1, 0);
    let tmp6 = date2;
    if (date1 < date2.getDate()) {
      const setFullYear = defaultResult1.setFullYear;
      const fullYear = date2.getFullYear();
      setFullYear(fullYear, date2.getMonth(), date1);
      tmp6 = defaultResult1;
    }
    return tmp6;
  } else {
    return defaultResult1;
  }
};