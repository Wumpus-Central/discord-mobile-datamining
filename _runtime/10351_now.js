// === Module 10351: now ===

// Module 10351 (now)
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10330 */;
import Meridiem from "Meridiem" /* 10332 */;
import assignSimilarDate from "assignSimilarDate" /* 10333 */;

require = arg1;
const dependencyMap = arg6;

export function now(getDateWithAdjustedTimezone) {
  const dateWithAdjustedTimezone = getDateWithAdjustedTimezone.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(getDateWithAdjustedTimezone, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, dateWithAdjustedTimezone);
  assignSimilarDate.assignSimilarTime(parsingComponents, dateWithAdjustedTimezone);
  parsingComponents.assign("timezoneOffset", getDateWithAdjustedTimezone.getTimezoneOffset());
  parsingComponents.addTag("casualReference/now");
  return parsingComponents;
}
export function today(reference) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, dateWithAdjustedTimezone);
  assignSimilarDate.implySimilarTime(parsingComponents, dateWithAdjustedTimezone);
  parsingComponents.delete("meridiem");
  parsingComponents.addTag("casualReference/today");
  return parsingComponents;
}
export function yesterday(reference) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + -1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents.addTag("casualReference/yesterday");
}
export function tomorrow(reference) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + 1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents.addTag("casualReference/tomorrow");
}
export function theDayBefore(reference, arg1) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + -arg1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents;
}
export function theDayAfter(reference, arg1) {
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  const date = new Date(dateWithAdjustedTimezone.getTime());
  date.setDate(date.getDate() + arg1);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  assignSimilarDate.implySimilarTime(parsingComponents, date);
  parsingComponents.delete("meridiem");
  return parsingComponents;
}
export function tonight(reference) {
  let num = date;
  if (date === undefined) {
    num = 22;
  }
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  assignSimilarDate.assignSimilarDate(parsingComponents, dateWithAdjustedTimezone);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
  parsingComponents.addTag("casualReference/tonight");
  return parsingComponents;
}
export function lastNight(reference) {
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
}
export function evening(reference) {
  let num = date;
  if (date === undefined) {
    num = 20;
  }
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
  parsingComponents.imply("hour", num);
  parsingComponents.addTag("casualReference/evening");
  return parsingComponents;
}
export function yesterdayEvening(reference) {
  let num = date;
  if (date === undefined) {
    num = 20;
  }
  const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  date = new Date(dateWithAdjustedTimezone.getTime() - 86400000);
  assignSimilarDate.assignSimilarDate(parsingComponents, date);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
  parsingComponents.addTag("casualReference/yesterday");
  parsingComponents.addTag("casualReference/evening");
  return parsingComponents;
}
export function midnight(reference) {
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
}
export function morning(reference) {
  let num = date;
  if (date === undefined) {
    num = 6;
  }
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/morning");
  return parsingComponents;
}
export function afternoon(reference) {
  let num = date;
  if (date === undefined) {
    num = 15;
  }
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
  parsingComponents.imply("hour", num);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/afternoon");
  return parsingComponents;
}
export function noon(reference) {
  const parsingComponents = new ReferenceWithTimezone.ParsingComponents(reference, {});
  parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
  parsingComponents.assign("hour", 12);
  parsingComponents.imply("minute", 0);
  parsingComponents.imply("second", 0);
  parsingComponents.imply("millisecond", 0);
  parsingComponents.addTag("casualReference/noon");
  return parsingComponents;
}