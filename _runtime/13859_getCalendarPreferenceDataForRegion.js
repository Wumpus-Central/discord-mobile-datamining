// === Module 13859: getCalendarPreferenceDataForRegion ===

// Module 13859 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1281 */;
import _mod13860 from "module_13860" /* 13860 */;
import _mod13861 from "module_13861" /* 13861 */;
import _mod13862 from "module_13862" /* 13862 */;
import _mod13863 from "module_13863" /* 13863 */;

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
  return _mod13860.calendars[str] || _mod13860.calendars["001"].map((arg0) => {
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
  let v001 = _mod13861.hourCycles[formatted] || tmp2(13861).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13861).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13861).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13862.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13862).timezones[formatted], true);
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
  return _mod13863.weekData[str] || _mod13863.weekData["001"];
};