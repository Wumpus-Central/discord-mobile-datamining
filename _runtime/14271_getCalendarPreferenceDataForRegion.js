// === Module 14271: getCalendarPreferenceDataForRegion ===

// Module 14271 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1162 */;
import _mod14272 from "module_14272" /* 14272 */;
import _mod14273 from "module_14273" /* 14273 */;
import _mod14274 from "module_14274" /* 14274 */;
import _mod14275 from "module_14275" /* 14275 */;

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
  return _mod14272.calendars[str] || _mod14272.calendars["001"].map((arg0) => {
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
  let v001 = _mod14273.hourCycles[formatted] || tmp2(14273).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14273).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14273).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod14274.timezones[formatted]) {
    return tmp2(1162).__spreadArray(items, tmp2(14274).timezones[formatted], true);
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
  return _mod14275.weekData[str] || _mod14275.weekData["001"];
};