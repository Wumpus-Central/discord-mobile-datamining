// === Module 13705: getCalendarPreferenceDataForRegion ===

// Module 13705 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1281 */;
import _mod13706 from "module_13706" /* 13706 */;
import _mod13707 from "module_13707" /* 13707 */;
import _mod13708 from "module_13708" /* 13708 */;
import _mod13709 from "module_13709" /* 13709 */;

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
  return _mod13706.calendars[str] || _mod13706.calendars["001"].map((arg0) => {
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
  let v001 = _mod13707.hourCycles[formatted] || tmp2(13707).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13707).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13707).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13708.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13708).timezones[formatted], true);
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
  return _mod13709.weekData[str] || _mod13709.weekData["001"];
};