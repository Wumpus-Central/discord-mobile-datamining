// === Module 3941: intervalToDuration ===

// Module 3941 (intervalToDuration)
import compareAsc from "compareAsc" /* 3826 */;
import _typeof from "module_3797" /* 3797 */;
import compareLocalAsc from "compareLocalAsc" /* 3841 */;
import differenceInHours from "differenceInHours" /* 3842 */;
import differenceInMinutes from "differenceInMinutes" /* 3847 */;
import differenceInMonths from "differenceInMonths" /* 3848 */;
import differenceInSeconds from "differenceInSeconds" /* 3853 */;
import differenceInYears from "differenceInYears" /* 3855 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!compareAsc) {
  let obj = { default: compareAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
compareAsc = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!compareLocalAsc) {
  obj = { default: compareLocalAsc };
  let tmp7 = obj;
} else {
  tmp7 = compareLocalAsc;
}
compareLocalAsc = tmp7;
if (!differenceInHours) {
  let obj1 = { default: differenceInHours };
  let tmp9 = obj1;
} else {
  tmp9 = differenceInHours;
}
differenceInHours = tmp9;
if (!differenceInMinutes) {
  let obj2 = { default: differenceInMinutes };
  let tmp11 = obj2;
} else {
  tmp11 = differenceInMinutes;
}
differenceInMinutes = tmp11;
if (!differenceInMonths) {
  let obj3 = { default: differenceInMonths };
  let tmp13 = obj3;
} else {
  tmp13 = differenceInMonths;
}
differenceInMonths = tmp13;
if (!differenceInSeconds) {
  const obj4 = { default: differenceInSeconds };
  let tmp15 = obj4;
} else {
  tmp15 = differenceInSeconds;
}
differenceInSeconds = tmp15;
if (!differenceInYears) {
  const obj5 = { default: differenceInYears };
  let tmp17 = obj5;
} else {
  tmp17 = differenceInYears;
}
differenceInYears = tmp17;
if (!_typeof) {
  const obj6 = { default: _typeof };
  let tmp19 = obj6;
} else {
  tmp19 = _typeof;
}
_typeof = tmp19;
if (!requiredArgs) {
  const obj7 = { default: requiredArgs };
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
      const time = {};
      const _Math = Math;
      time.years = Math.abs(differenceInYears.default(defaultResult2, defaultResult1));
      const defaultResult3 = compareAsc.default(defaultResult2, defaultResult1);
      let obj = { years: defaultResult3 * time.years };
      const defaultResult4 = _typeof.default(defaultResult1, obj);
      const _Math2 = Math;
      time.months = Math.abs(differenceInMonths.default(defaultResult2, defaultResult4));
      obj = { months: defaultResult3 * time.months };
      const defaultResult5 = _typeof.default(defaultResult4, obj);
      const _Math3 = Math;
      time.days = Math.abs(compareLocalAsc.default(defaultResult2, defaultResult5));
      const obj1 = { days: defaultResult3 * time.days };
      const defaultResult6 = _typeof.default(defaultResult5, obj1);
      const _Math4 = Math;
      time.hours = Math.abs(differenceInHours.default(defaultResult2, defaultResult6));
      const obj2 = { hours: defaultResult3 * time.hours };
      const defaultResult7 = _typeof.default(defaultResult6, obj2);
      const _Math5 = Math;
      time.minutes = Math.abs(differenceInMinutes.default(defaultResult2, defaultResult7));
      const obj3 = { minutes: defaultResult3 * time.minutes };
      const _Math6 = Math;
      time.seconds = Math.abs(differenceInSeconds.default(defaultResult2, _typeof.default(defaultResult7, obj3)));
      return time;
    }
  }
};
export default exports.default;