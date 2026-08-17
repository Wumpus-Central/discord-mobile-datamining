// _runtime/13647_getCalendarPreferenceDataForRegion.js
import e from "e" /* 1281 */;
import _mod13648 from "module_13648" /* 13648 */;
import _mod13649 from "module_13649" /* 13649 */;
import _mod13650 from "module_13650" /* 13650 */;
import _mod13651 from "module_13651" /* 13651 */;

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
  return _mod13648.calendars[str] || _mod13648.calendars["001"].map((arg0) => {
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
  let v001 = _mod13649.hourCycles[formatted] || tmp2(13649).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13649).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13649).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13650.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13650).timezones[formatted], true);
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
  return _mod13651.weekData[str] || _mod13651.weekData["001"];
};