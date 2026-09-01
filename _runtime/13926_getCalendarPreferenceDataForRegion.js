// === Module 13926: getCalendarPreferenceDataForRegion ===

// Module 13926 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1281 */;
import _mod13927 from "module_13927" /* 13927 */;
import _mod13928 from "module_13928" /* 13928 */;
import _mod13929 from "module_13929" /* 13929 */;
import _mod13930 from "module_13930" /* 13930 */;

require = arg1;
const dependencyMap = arg6;
arg5.getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return _mod13927.calendars[str] || _mod13927.calendars["001"].map((arg0) => {
    let str = "gregory";
    if ("gregorian" !== arg0) {
      let str2 = "islamicc";
      if ("islamic-civil" !== arg0) {
        str2 = arg0;
      }
      str = str2;
    }
    return str;
  });
};
arg5.getHourCyclesPreferenceDataForLocaleOrRegion = function getHourCyclesPreferenceDataForLocaleOrRegion(locale, region) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = _mod13928.hourCycles[formatted] || tmp2(13928).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13928).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13928).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13929.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13929).timezones[formatted], true);
  } else {
    return items;
  }
};
arg5.getWeekDataForRegion = function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "001";
  }
  return _mod13930.weekData[str] || _mod13930.weekData["001"];
};