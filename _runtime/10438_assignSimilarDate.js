// _runtime/10438_assignSimilarDate.js
import Meridiem from "10437_Meridiem.js";

require = arg1;
const dependencyMap = arg6;

export const assignSimilarDate = function assignSimilarDate(parsingComponents, date) {
  parsingComponents.assign("day", date.getDate());
  parsingComponents.assign("month", date.getMonth() + 1);
  parsingComponents.assign("year", date.getFullYear());
};
export const assignSimilarTime = function assignSimilarTime(parsingComponents, addDurationResult) {
  parsingComponents.assign("hour", addDurationResult.getHours());
  parsingComponents.assign("minute", addDurationResult.getMinutes());
  parsingComponents.assign("second", addDurationResult.getSeconds());
  parsingComponents.assign("millisecond", addDurationResult.getMilliseconds());
  if (addDurationResult.getHours() < 12) {
    let PM = Meridiem.Meridiem.AM;
  } else {
    PM = Meridiem.Meridiem.PM;
  }
  parsingComponents.assign("meridiem", PM);
};
export const implySimilarDate = function implySimilarDate(end, date) {
  end.imply("day", date.getDate());
  end.imply("month", date.getMonth() + 1);
  end.imply("year", date.getFullYear());
};
export const implySimilarTime = function implySimilarTime(parsingComponents, date) {
  parsingComponents.imply("hour", date.getHours());
  parsingComponents.imply("minute", date.getMinutes());
  parsingComponents.imply("second", date.getSeconds());
  parsingComponents.imply("millisecond", date.getMilliseconds());
  if (date.getHours() < 12) {
    let PM = Meridiem.Meridiem.AM;
  } else {
    PM = Meridiem.Meridiem.PM;
  }
  parsingComponents.imply("meridiem", PM);
};
