// === Module 10459: ? ===

// Module 10459
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10435 */;
import Meridiem from "Meridiem" /* 10437 */;

require = arg1;
const dependencyMap = arg6;
function getDaysToWeekday(dateWithAdjustedTimezone, sum, next) {
  const day = dateWithAdjustedTimezone.getDay();
  if ("this" === next) {
    const diff = sum - dateWithAdjustedTimezone.getDay();
    sum = diff;
    if (diff < 0) {
      sum = diff + 7;
    }
    return sum;
  } else if ("last" === next) {
    const diff1 = sum - dateWithAdjustedTimezone.getDay();
    let diff2 = diff1;
    if (diff1 >= 0) {
      diff2 = diff1 - 7;
    }
    return diff2;
  } else if ("next" === next) {
    if (day == Meridiem.Weekday.SUNDAY) {
      let num12 = 7;
      if (sum != tmp6(10437).Weekday.SUNDAY) {
        num12 = sum;
      }
      let sum3 = num12;
    } else if (day == tmp6(10437).Weekday.SATURDAY) {
      let num9 = 7;
      if (sum != tmp6(10437).Weekday.SATURDAY) {
        let num10 = 8;
        if (sum != tmp6(10437).Weekday.SUNDAY) {
          num10 = 1 + sum;
        }
        num9 = num10;
      }
      sum3 = num9;
    } else {
      if (sum < day) {
        if (sum != tmp6(10437).Weekday.SUNDAY) {
          const diff3 = sum - dateWithAdjustedTimezone.getDay();
          let sum1 = diff3;
          if (diff3 < 0) {
            sum1 = diff3 + 7;
          }
          sum3 = sum1;
        }
      }
      const diff4 = sum - dateWithAdjustedTimezone.getDay();
      let sum2 = diff4;
      if (diff4 < 0) {
        sum2 = diff4 + 7;
      }
      sum3 = sum2 + 7;
    }
    return sum3;
  } else {
    const diff5 = sum - dateWithAdjustedTimezone.getDay();
    let diff6 = diff5;
    if (diff5 >= 0) {
      diff6 = diff5 - 7;
    }
    const diff7 = sum - dateWithAdjustedTimezone.getDay();
    let sum4 = diff7;
    if (diff7 < 0) {
      sum4 = diff7 + 7;
    }
    if (sum4 < -diff6) {
      diff6 = sum4;
    }
    return diff6;
  }
}

export const createParsingComponentsAtWeekday = function createParsingComponentsAtWeekday(reference, sum, next) {
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference);
  const addDurationAsImpliedResult = parsingComponents.addDurationAsImplied({ day: getDaysToWeekday(reference.getDateWithAdjustedTimezone(), sum, next) });
  addDurationAsImpliedResult.assign("weekday", sum);
  return addDurationAsImpliedResult;
};
export { getDaysToWeekday };
export const getDaysToWeekdayClosest = function getDaysToWeekdayClosest(getDay, arg1) {
  const diff = arg1 - getDay.getDay();
  let diff1 = diff;
  if (diff >= 0) {
    diff1 = diff - 7;
  }
  const diff2 = arg1 - getDay.getDay();
  let sum = diff2;
  if (diff2 < 0) {
    sum = diff2 + 7;
  }
  if (sum < -diff1) {
    diff1 = sum;
  }
  return diff1;
};
export const getDaysForwardToWeekday = function getDaysForwardToWeekday(getDay, arg1) {
  const diff = arg1 - getDay.getDay();
  let sum = diff;
  if (diff < 0) {
    sum = diff + 7;
  }
  return sum;
};
export const getBackwardDaysToWeekday = function getBackwardDaysToWeekday(getDay, arg1) {
  const diff = arg1 - getDay.getDay();
  let diff1 = diff;
  if (diff >= 0) {
    diff1 = diff - 7;
  }
  return diff1;
};