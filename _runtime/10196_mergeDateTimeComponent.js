// _runtime/10196_mergeDateTimeComponent.js
import Meridiem from "10179_Meridiem.js";
import assignSimilarDate from "10180_assignSimilarDate.js";

function mergeDateTimeComponent(start, start2) {
  const cloneResult = start.clone();
  if (start2.isCertain("hour")) {
    cloneResult.assign("hour", start2.get("hour"));
    cloneResult.assign("minute", start2.get("minute"));
    if (start2.isCertain("second")) {
      cloneResult.assign("second", start2.get("second"));
      if (start2.isCertain("millisecond")) {
        cloneResult.assign("millisecond", start2.get("millisecond"));
      } else {
        cloneResult.imply("millisecond", start2.get("millisecond"));
      }
    } else {
      cloneResult.imply("second", start2.get("second"));
      cloneResult.imply("millisecond", start2.get("millisecond"));
    }
  } else {
    cloneResult.imply("hour", start2.get("hour"));
    cloneResult.imply("minute", start2.get("minute"));
    cloneResult.imply("second", start2.get("second"));
    cloneResult.imply("millisecond", start2.get("millisecond"));
  }
  if (start2.isCertain("timezoneOffset")) {
    cloneResult.assign("timezoneOffset", start2.get("timezoneOffset"));
  }
  if (start2.isCertain("meridiem")) {
    cloneResult.assign("meridiem", start2.get("meridiem"));
  } else {
    const tmp14 = null != start2.get("meridiem") && null == cloneResult.get("meridiem");
    if (tmp14) {
      cloneResult.imply("meridiem", start2.get("meridiem"));
    }
  }
  const value = cloneResult.get("meridiem");
  const tmp18 = value == Meridiem.Meridiem.PM && cloneResult.get("hour") < 12;
  if (tmp18) {
    if (start2.isCertain("hour")) {
      cloneResult.assign("hour", cloneResult.get("hour") + 12);
    } else {
      cloneResult.imply("hour", cloneResult.get("hour") + 12);
    }
  }
  cloneResult.addTags(start.tags());
  cloneResult.addTags(start2.tags());
  return cloneResult;
}

export const mergeDateTimeResult = function mergeDateTimeResult(clone, start) {
  const cloneResult = clone.clone();
  cloneResult.start = mergeDateTimeComponent(clone.start, start.start);
  if (null != clone.end) {
    const tmp2Result = mergeDateTimeComponent(clone.end ?? clone.start, start.end ?? start.start);
    if (null == clone.end) {
      start = cloneResult.start;
      const dateResult = tmp2Result.date();
      const time = dateResult.getTime();
      const dateResult1 = start.date();
      if (time < dateResult1.getTime()) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const dateResult2 = tmp2Result.date();
        const date = new Date(dateResult2.getTime());
        date.setDate(date.getDate() + 1);
        const isCertainResult = tmp2Result.isCertain("day");
        const obj6 = assignSimilarDate;
        if (isCertainResult) {
          obj6.assignSimilarDate(tmp2Result, date);
        } else {
          obj6.implySimilarDate(tmp2Result, date);
        }
      }
    }
    cloneResult.end = tmp2Result;
  }
  return cloneResult;
};
export { mergeDateTimeComponent };
