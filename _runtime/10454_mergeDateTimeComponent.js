// _runtime/10454_mergeDateTimeComponent.js
import Meridiem from "10437_Meridiem.js";
import assignSimilarDate from "10438_assignSimilarDate.js";

require = arg1;
const dependencyMap = arg6;
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
    if (tmp14) {
      cloneResult.imply("meridiem", start2.get("meridiem"));
    }
    tmp14 = null != start2.get("meridiem") && null == cloneResult.get("meridiem");
  }
  value = cloneResult.get("meridiem");
  let tmp18 = value == Meridiem.Meridiem.PM;
  if (tmp18) {
    tmp18 = cloneResult.get("hour") < 12;
  }
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
  if (null == clone.end) {
    if (null == start.end) {
      return cloneResult;
    }
  }
  const tmp2Result = mergeDateTimeComponent(clone.end ?? clone.start, start.end ?? start.start);
  let end = clone.end;
  if (null == end) {
    start = cloneResult.start;
    const time = tmp2Result.date().getTime();
    const dateResult = tmp2Result.date();
    end = start.date().getTime();
    if (time < end) {
      const _Date = Date;
      const date = new Date(tmp2Result.date().getTime());
      end = date;
      date.setDate(date.getDate() + 1);
      const dateResult2 = tmp2Result.date();
      let assignSimilarDateResult = assignSimilarDate;
      if (!isCertainResult) {
        assignSimilarDateResult.implySimilarDate(tmp2Result, end);
      }
      isCertainResult = tmp2Result.isCertain("day");
    }
    assignSimilarDateResult = assignSimilarDateResult.assignSimilarDate(tmp2Result, end);
    const dateResult1 = start.date();
  }
  cloneResult.end = tmp2Result;
};
export { mergeDateTimeComponent };
