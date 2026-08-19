// === Module 3763: intervalToDuration ===

// Module 3763 (intervalToDuration)
import compareAsc from "compareAsc" /* 3648 */;
import _typeof from "_typeof" /* 3619 */;
import compareLocalAsc from "compareLocalAsc" /* 3663 */;
import differenceInHours from "differenceInHours" /* 3664 */;
import differenceInMinutes from "differenceInMinutes" /* 3669 */;
import differenceInMonths from "differenceInMonths" /* 3670 */;
import differenceInSeconds from "differenceInSeconds" /* 3675 */;
import differenceInYears from "differenceInYears" /* 3677 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!compareAsc) {
  let obj = { default: null };
  obj[0] = compareAsc;
  let tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
compareAsc = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!compareLocalAsc) {
  obj = { default: null };
  obj[0] = compareLocalAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareLocalAsc;
}
compareLocalAsc = tmp7;
if (!differenceInHours) {
  let obj1 = { default: null };
  obj1[0] = differenceInHours;
  let tmp9 = obj1;
} else {
  tmp9 = differenceInHours;
}
differenceInHours = tmp9;
if (!differenceInMinutes) {
  let obj2 = { default: null };
  obj2[0] = differenceInMinutes;
  let tmp11 = obj2;
} else {
  tmp11 = differenceInMinutes;
}
differenceInMinutes = tmp11;
if (!differenceInMonths) {
  let obj3 = { default: null };
  obj3[0] = differenceInMonths;
  let tmp13 = obj3;
} else {
  tmp13 = differenceInMonths;
}
differenceInMonths = tmp13;
if (!differenceInSeconds) {
  let obj4 = { default: null };
  obj4[0] = differenceInSeconds;
  let tmp15 = obj4;
} else {
  tmp15 = differenceInSeconds;
}
differenceInSeconds = tmp15;
if (!differenceInYears) {
  const obj5 = { default: null };
  obj5[0] = differenceInYears;
  let tmp17 = obj5;
} else {
  tmp17 = differenceInYears;
}
differenceInYears = tmp17;
if (!_typeof) {
  const obj6 = { default: null };
  obj6[0] = _typeof;
  let tmp19 = obj6;
} else {
  tmp19 = _typeof;
}
_typeof = tmp19;
if (!requiredArgs) {
  const obj7 = { default: null };
  obj7[0] = requiredArgs;
  let tmp21 = obj7;
} else {
  tmp21 = requiredArgs;
}
requiredArgs = tmp21;

export default function intervalToDuration(start) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(start.start);
  const defaultResult2 = _typeof.default(start.end);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Start Date is invalid");
    throw rangeError;
  } else {
    const _isNaN = isNaN;
    if (isNaN(defaultResult2.getTime())) {
      const _RangeError = RangeError;
      const rangeError1 = new RangeError("End Date is invalid");
      throw rangeError1;
    } else {
      let obj = {};
      const _Math = Math;
      obj.years = Math.abs(differenceInYears.default(defaultResult2, defaultResult1));
      const defaultResult3 = compareAsc.default(defaultResult2, defaultResult1);
      obj = { years: null };
      obj[0] = defaultResult3 * obj.years;
      const defaultResult4 = _typeof.default(defaultResult1, obj);
      const _Math2 = Math;
      obj.months = Math.abs(differenceInMonths.default(defaultResult2, defaultResult4));
      obj1 = { months: null };
      obj1[0] = defaultResult3 * obj.months;
      const defaultResult5 = _typeof.default(defaultResult4, obj1);
      const _Math3 = Math;
      obj.days = Math.abs(compareLocalAsc.default(defaultResult2, defaultResult5));
      const obj2 = { days: null };
      obj2[0] = defaultResult3 * obj.days;
      const defaultResult6 = _typeof.default(defaultResult5, obj2);
      const _Math4 = Math;
      obj.hours = Math.abs(differenceInHours.default(defaultResult2, defaultResult6));
      const obj3 = { hours: null };
      obj3[0] = defaultResult3 * obj.hours;
      const defaultResult7 = _typeof.default(defaultResult6, obj3);
      const _Math5 = Math;
      obj.minutes = Math.abs(differenceInMinutes.default(defaultResult2, defaultResult7));
      const obj4 = { minutes: null };
      obj4[0] = defaultResult3 * obj.minutes;
      const _Math6 = Math;
      obj.seconds = Math.abs(differenceInSeconds.default(defaultResult2, _typeof.default(defaultResult7, obj4)));
      return obj;
    }
  }
};
export default exports.default;