// === Module 13893: getCalendarPreferenceDataForRegion ===

// Module 13893 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1281 */;
import _mod13894 from "module_13894" /* 13894 */;
import _mod13895 from "module_13895" /* 13895 */;
import _mod13896 from "module_13896" /* 13896 */;
import _mod13897 from "module_13897" /* 13897 */;

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
  return _mod13894.calendars[str] || _mod13894.calendars["001"].map((arg0) => {
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
  let v001 = _mod13895.hourCycles[formatted] || tmp2(13895).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13895).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13895).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13896.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13896).timezones[formatted], true);
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
  return _mod13897.weekData[str] || _mod13897.weekData["001"];
};