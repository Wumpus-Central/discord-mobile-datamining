// === Module 14149: getCalendarPreferenceDataForRegion ===

// Module 14149 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1280 */;
import _mod14150 from "module_14150" /* 14150 */;
import _mod14151 from "module_14151" /* 14151 */;
import _mod14152 from "module_14152" /* 14152 */;
import _mod14153 from "module_14153" /* 14153 */;

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
  return _mod14150.calendars[str] || _mod14150.calendars["001"].map((arg0) => {
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
  let v001 = _mod14151.hourCycles[formatted] || tmp2(14151).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14151).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14151).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod14152.timezones[formatted]) {
    return tmp2(1280).__spreadArray(items, tmp2(14152).timezones[formatted], true);
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
  return _mod14153.weekData[str] || _mod14153.weekData["001"];
};