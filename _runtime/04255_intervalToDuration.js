// === Module 4255: intervalToDuration ===

// Module 4255 (intervalToDuration)
import compareAsc_mod from "compareAsc" /* 4140 */;
import add_mod from "add" /* 4111 */;
import differenceInDays_mod from "differenceInDays" /* 4155 */;
import differenceInHours_mod from "differenceInHours" /* 4156 */;
import differenceInMinutes_mod from "differenceInMinutes" /* 4161 */;
import differenceInMonths_mod from "differenceInMonths" /* 4162 */;
import differenceInSeconds_mod from "differenceInSeconds" /* 4167 */;
import differenceInYears_mod from "differenceInYears" /* 4169 */;
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp19;
let tmp21;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  let obj = { default: compareAsc };
  tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
compareAsc = tmp3;
let add = add_mod;
if (!add) {
  let obj2 = { default: add };
  tmp5 = obj2;
} else {
  tmp5 = add;
}
add = tmp5;
let differenceInDays = differenceInDays_mod;
if (!differenceInDays) {
  let obj3 = { default: differenceInDays };
  tmp7 = obj3;
} else {
  tmp7 = differenceInDays;
}
differenceInDays = tmp7;
let differenceInHours = differenceInHours_mod;
if (!differenceInHours) {
  let obj4 = { default: differenceInHours };
  tmp9 = obj4;
} else {
  tmp9 = differenceInHours;
}
differenceInHours = tmp9;
let differenceInMinutes = differenceInMinutes_mod;
if (!differenceInMinutes) {
  const obj5 = { default: differenceInMinutes };
  tmp11 = obj5;
} else {
  tmp11 = differenceInMinutes;
}
differenceInMinutes = tmp11;
let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  tmp13 = { default: differenceInMonths };
  const obj6 = { default: differenceInMonths };
} else {
  tmp13 = differenceInMonths;
}
differenceInMonths = tmp13;
let differenceInSeconds = differenceInSeconds_mod;
if (!differenceInSeconds) {
  tmp15 = { default: differenceInSeconds };
  const obj7 = { default: differenceInSeconds };
} else {
  tmp15 = differenceInSeconds;
}
differenceInSeconds = tmp15;
let differenceInYears = differenceInYears_mod;
if (!differenceInYears) {
  tmp17 = { default: differenceInYears };
  const obj8 = { default: differenceInYears };
} else {
  tmp17 = differenceInYears;
}
differenceInYears = tmp17;
let toDate = toDate_mod;
if (!toDate) {
  tmp19 = { default: toDate };
  const obj9 = { default: toDate };
} else {
  tmp19 = toDate;
}
toDate = tmp19;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp21 = { default: requiredArgs };
  const obj10 = { default: requiredArgs };
} else {
  tmp21 = requiredArgs;
}
requiredArgs = tmp21;

export default function intervalToDuration(start) {
  let defaultResult4;
  let defaultResult5;
  let defaultResult6;
  let defaultResult7;
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(start.start);
  const defaultResult2 = toDate.default(start.end);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError2 = RangeError;
    const self3 = this;
    const self4 = this;
    const rangeError = new RangeError("Start Date is invalid");
    throw rangeError;
  } else {
    const _isNaN = isNaN;
    if (isNaN(defaultResult2.getTime())) {
      const _RangeError = RangeError;
      const self = this;
      const self2 = this;
      const rangeError1 = new RangeError("End Date is invalid");
      throw rangeError1;
    } else {
      const time = { years: Math.abs(differenceInYears.default(defaultResult2, defaultResult1)), months: Math.abs(differenceInMonths.default(defaultResult2, defaultResult4)), days: Math.abs(differenceInDays.default(defaultResult2, defaultResult5)), hours: Math.abs(differenceInHours.default(defaultResult2, defaultResult6)), minutes: Math.abs(differenceInMinutes.default(defaultResult2, defaultResult7)), seconds: Math.abs(differenceInSeconds.default(defaultResult2, add.default(defaultResult7, obj5))) };
      const _Math = Math;
      const defaultResult3 = compareAsc.default(defaultResult2, defaultResult1);
      const obj = { years: defaultResult3 * time.years };
      defaultResult4 = add.default(defaultResult1, obj);
      const _Math2 = Math;
      const obj2 = { months: defaultResult3 * time.months };
      defaultResult5 = add.default(defaultResult4, obj2);
      const _Math3 = Math;
      const obj3 = { days: defaultResult3 * time.days };
      defaultResult6 = add.default(defaultResult5, obj3);
      const _Math4 = Math;
      const obj4 = { hours: defaultResult3 * time.hours };
      defaultResult7 = add.default(defaultResult6, obj4);
      const _Math5 = Math;
      const _Math6 = Math;
      return time;
    }
  }
};