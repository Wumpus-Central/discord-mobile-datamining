import compareAsc from "compareAsc";
import _typeof from "_typeof";
import compareLocalAsc from "compareLocalAsc";
import differenceInHours from "differenceInHours";
import differenceInMinutes from "differenceInMinutes";
import differenceInMonths from "differenceInMonths";
import differenceInSeconds from "differenceInSeconds";
import differenceInYears from "differenceInYears";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!compareAsc) {
  let obj = { default: null };
  obj[0] = compareAsc;
  let tmp3 = obj;
} else {
  tmp3 = compareAsc;
}
let c0 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let closure_1 = tmp5;
if (!compareLocalAsc) {
  obj = { default: null };
  obj[0] = compareLocalAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareLocalAsc;
}
let obj1 = tmp7;
if (!differenceInHours) {
  obj1 = { default: null };
  obj1[0] = differenceInHours;
  let tmp9 = obj1;
} else {
  tmp9 = differenceInHours;
}
let c3 = tmp9;
if (!differenceInMinutes) {
  let obj2 = { default: null };
  obj2[0] = differenceInMinutes;
  let tmp11 = obj2;
} else {
  tmp11 = differenceInMinutes;
}
let c4 = tmp11;
if (!differenceInMonths) {
  let obj3 = { default: null };
  obj3[0] = differenceInMonths;
  let tmp13 = obj3;
} else {
  tmp13 = differenceInMonths;
}
let c5 = tmp13;
if (!differenceInSeconds) {
  let obj4 = { default: null };
  obj4[0] = differenceInSeconds;
  let tmp15 = obj4;
} else {
  tmp15 = differenceInSeconds;
}
let closure_6 = tmp15;
if (!differenceInYears) {
  const obj5 = { default: null };
  obj5[0] = differenceInYears;
  let tmp17 = obj5;
} else {
  tmp17 = differenceInYears;
}
const error = tmp17;
if (!_typeof) {
  const obj6 = { default: null };
  obj6[0] = _typeof;
  let tmp19 = obj6;
} else {
  tmp19 = _typeof;
}
const metroImportAll = tmp19;
if (!requiredArgs) {
  const obj7 = { default: null };
  obj7[0] = requiredArgs;
  let tmp21 = obj7;
} else {
  tmp21 = requiredArgs;
}
let c9 = tmp21;

export default function intervalToDuration(start) {
  tmp21.default(1, arguments);
  const defaultResult1 = tmp19.default(start.start);
  const defaultResult2 = tmp19.default(start.end);
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
      obj.years = Math.abs(tmp17.default(defaultResult2, defaultResult1));
      const defaultResult3 = tmp3.default(defaultResult2, defaultResult1);
      obj = { years: null };
      obj[0] = defaultResult3 * obj.years;
      const defaultResult4 = tmp5.default(defaultResult1, obj);
      const _Math2 = Math;
      obj.months = Math.abs(tmp13.default(defaultResult2, defaultResult4));
      const obj1 = { months: null };
      obj1[0] = defaultResult3 * obj.months;
      const defaultResult5 = tmp5.default(defaultResult4, obj1);
      const _Math3 = Math;
      obj.days = Math.abs(tmp13.default(defaultResult2, defaultResult5));
      const obj2 = { days: null };
      obj2[0] = defaultResult3 * obj.days;
      const defaultResult6 = tmp5.default(defaultResult5, obj2);
      const _Math4 = Math;
      obj.hours = Math.abs(tmp13.default(defaultResult2, defaultResult6));
      const obj3 = { hours: null };
      obj3[0] = defaultResult3 * obj.hours;
      const defaultResult7 = tmp5.default(defaultResult6, obj3);
      const _Math5 = Math;
      obj.minutes = Math.abs(tmp13.default(defaultResult2, defaultResult7));
      const obj4 = { minutes: null };
      obj4[0] = defaultResult3 * obj.minutes;
      const _Math6 = Math;
      obj.seconds = Math.abs(tmp15.default(defaultResult2, tmp5.default(defaultResult7, obj4)));
      return obj;
    }
  }
};
export default exports.default;