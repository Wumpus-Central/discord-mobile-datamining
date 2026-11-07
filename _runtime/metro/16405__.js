// === Module 16405: ? ===

// Module 16405
import e from "e" /* 1159 */;
import calendars from "calendars" /* 16406 */;
import hourCycles from "hourCycles" /* 16407 */;
import timezones from "timezones" /* 16408 */;
import weekData from "weekData" /* 16409 */;

require = arg1;
const dependencyMap = arg6;

export function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return calendars.calendars[str] || calendars.calendars["001"].map((item) => {
    let str = "gregory";
    if ("gregorian" !== item) {
      let str2 = "islamicc";
      if ("islamic-civil" !== item) {
        str2 = item;
      }
      str = str2;
    }
    return str;
  });
}
export function getHourCyclesPreferenceDataForLocaleOrRegion(locale, region) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = hourCycles.hourCycles[formatted] || hourCycles.hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = hourCycles.hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = hourCycles.hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
}
export function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  items = [];
  if (timezones.timezones[formatted]) {
    return e.__spreadArray(items, timezones.timezones[formatted], true);
  } else {
    return items;
  }
}
export function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "001";
  }
  return weekData.weekData[str] || weekData.weekData["001"];
}