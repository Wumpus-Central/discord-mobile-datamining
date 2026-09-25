// _runtime/04206_intervalToDuration.js
import compareAsc_mod from "04091_compareAsc.js";
import _typeof_mod from "metro/04062__.js";
import compareLocalAsc_mod from "04106_compareLocalAsc.js";
import differenceInHours_mod from "04107_differenceInHours.js";
import differenceInMinutes_mod from "04112_differenceInMinutes.js";
import differenceInMonths_mod from "04113_differenceInMonths.js";
import differenceInSeconds_mod from "04118_differenceInSeconds.js";
import differenceInYears_mod from "04120_differenceInYears.js";
import _typeof_mod from "metro/03915__.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let compareAsc = compareAsc_mod;
if (!compareAsc) {
  let obj = { default: compareAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
compareAsc = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let compareLocalAsc = compareLocalAsc_mod;
if (!compareLocalAsc) {
  let obj3 = { default: compareLocalAsc };
  let tmp7 = obj3;
} else {
  tmp7 = compareLocalAsc;
}
compareLocalAsc = tmp7;
let differenceInHours = differenceInHours_mod;
if (!differenceInHours) {
  let obj4 = { default: differenceInHours };
  let tmp9 = obj4;
} else {
  tmp9 = differenceInHours;
}
differenceInHours = tmp9;
let differenceInMinutes = differenceInMinutes_mod;
if (!differenceInMinutes) {
  let obj5 = { default: differenceInMinutes };
  let tmp11 = obj5;
} else {
  tmp11 = differenceInMinutes;
}
differenceInMinutes = tmp11;
let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  const obj6 = { default: differenceInMonths };
  let tmp13 = obj6;
} else {
  tmp13 = differenceInMonths;
}
differenceInMonths = tmp13;
let differenceInSeconds = differenceInSeconds_mod;
if (!differenceInSeconds) {
  const obj7 = { default: differenceInSeconds };
  let tmp15 = obj7;
} else {
  tmp15 = differenceInSeconds;
}
differenceInSeconds = tmp15;
let differenceInYears = differenceInYears_mod;
if (!differenceInYears) {
  const obj8 = { default: differenceInYears };
  let tmp17 = obj8;
} else {
  tmp17 = differenceInYears;
}
differenceInYears = tmp17;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj9 = { default: _typeof };
  let tmp19 = obj9;
} else {
  tmp19 = _typeof;
}
_typeof = tmp19;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj10 = { default: requiredArgs };
  let tmp21 = obj10;
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
      const obj = { years: defaultResult3 * time.years };
      const defaultResult4 = _typeof.default(defaultResult1, obj);
      const _Math2 = Math;
      time.months = Math.abs(differenceInMonths.default(defaultResult2, defaultResult4));
      const obj2 = { months: defaultResult3 * time.months };
      const defaultResult5 = _typeof.default(defaultResult4, obj2);
      const _Math3 = Math;
      time.days = Math.abs(compareLocalAsc.default(defaultResult2, defaultResult5));
      const obj3 = { days: defaultResult3 * time.days };
      const defaultResult6 = _typeof.default(defaultResult5, obj3);
      const _Math4 = Math;
      time.hours = Math.abs(differenceInHours.default(defaultResult2, defaultResult6));
      const obj4 = { hours: defaultResult3 * time.hours };
      const defaultResult7 = _typeof.default(defaultResult6, obj4);
      const _Math5 = Math;
      time.minutes = Math.abs(differenceInMinutes.default(defaultResult2, defaultResult7));
      const obj5 = { minutes: defaultResult3 * time.minutes };
      const _Math6 = Math;
      time.seconds = Math.abs(differenceInSeconds.default(defaultResult2, _typeof.default(defaultResult7, obj5)));
      return time;
    }
  }
};
export default exports.default;