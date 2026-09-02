// === Module 10470: now ===

// Module 10470 (now)
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10449 */;
import _mod10451 from "module_10451" /* 10451 */;
import assignSimilarDate from "assignSimilarDate" /* 10452 */;

require = arg1;
const dependencyMap = arg6;
arg5.now = function now(getDateWithAdjustedTimezone) {
  const dateWithAdjustedTimezone = getDateWithAdjustedTimezone.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(getDateWithAdjustedTimezone, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, dateWithAdjustedTimezone);
  assignSimilarDate.assignSimilarTime(parsingComponents, dateWithAdjustedTimezone);
  parsingComponents.assign("timezoneOffset", getDateWithAdjustedTimezone.getTimezoneOffset());
  parsingComponents.addTag("casualReference/now");
  return parsingComponents;
};
arg5.today = function today(reference) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, dateWithAdjustedTimezone);
  assignSimilarDate.implySimilarTime(parsingComponents, dateWithAdjustedTimezone);
  parsingComponents.delete("meridiem");
  parsingComponents.addTag("casualReference/today");
  return parsingComponents;
};
arg5.yesterday = function yesterday(reference) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + -1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents.addTag("casualReference/yesterday");
};
arg5.tomorrow = function tomorrow(reference) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + 1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents.addTag("casualReference/tomorrow");
};
arg5.theDayBefore = function theDayBefore(reference, arg1) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + -arg1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents;
};
arg5.theDayAfter = function theDayAfter(reference, arg1) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + arg1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents;
};
arg5.tonight = function tonight(reference, date) {
  let num = date;
  if (date === undefined) {
    num = 22;
  }
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, dateWithAdjustedTimezone);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("meridiem", _mod10451.Meridiem.PM);
  parsingComponents.addTag("casualReference/tonight");
  return parsingComponents;
};
arg5.lastNight = function lastNight(reference, date) {
  let num = date;
  if (date === undefined) {
    num = 0;
  }
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  date = dateWithAdjustedTimezone;
  if (dateWithAdjustedTimezone.getHours() < 6) {
    const _Date = Date;
    date = new Date(dateWithAdjustedTimezone.getTime() - 86400000);
  }
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  parsingComponents.imply("hour", num);
  return parsingComponents;
};
arg5.evening = function evening(reference, date) {
  let num = date;
  if (date === undefined) {
    num = 20;
  }
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", _mod10451.Meridiem.PM);
  parsingComponents.imply("hour", num);
  parsingComponents.addTag("casualReference/evening");
  return parsingComponents;
};
arg5.yesterdayEvening = function yesterdayEvening(reference, date) {
  let num = date;
  if (date === undefined) {
    num = 20;
  }
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, new Date(dateWithAdjustedTimezone.getTime() - 86400000));
  parsingComponents.imply("hour", num);
  parsingComponents.imply("meridiem", _mod10451.Meridiem.PM);
  parsingComponents.addTag("casualReference/yesterday");
  parsingComponents.addTag("casualReference/evening");
  return parsingComponents;
};
arg5.midnight = function midnight(reference) {
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  if (dateWithAdjustedTimezone.getHours() > 2) {
    parsingComponents.addDurationAsImplied({ day: 1 });
  }
  parsingComponents.assign("hour", 0);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/midnight");
  return parsingComponents;
};
arg5.morning = function morning(reference, date) {
  let num = date;
  if (date === undefined) {
    num = 6;
  }
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", _mod10451.Meridiem.AM);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/morning");
  return parsingComponents;
};
arg5.afternoon = function afternoon(reference, date) {
  let num = date;
  if (date === undefined) {
    num = 15;
  }
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", _mod10451.Meridiem.PM);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/afternoon");
  return parsingComponents;
};
arg5.noon = function noon(reference) {
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", _mod10451.Meridiem.AM);
  parsingComponents.assign("hour", 12);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/noon");
  return parsingComponents;
};