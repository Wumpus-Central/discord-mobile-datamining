// === Module 14165: getCalendarPreferenceDataForRegion ===

// Module 14165 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1280 */;
import _mod14166 from "module_14166" /* 14166 */;
import _mod14167 from "module_14167" /* 14167 */;
import _mod14168 from "module_14168" /* 14168 */;
import _mod14169 from "module_14169" /* 14169 */;

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
  return _mod14166.calendars[str] || _mod14166.calendars["001"].map((arg0) => {
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
  let v001 = _mod14167.hourCycles[formatted] || tmp2(14167).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14167).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14167).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod14168.timezones[formatted]) {
    return tmp2(1280).__spreadArray(items, tmp2(14168).timezones[formatted], true);
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
  return _mod14169.weekData[str] || _mod14169.weekData["001"];
};