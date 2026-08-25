// === Module 13740: getCalendarPreferenceDataForRegion ===

// Module 13740 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1281 */;
import _mod13741 from "module_13741" /* 13741 */;
import _mod13742 from "module_13742" /* 13742 */;
import _mod13743 from "module_13743" /* 13743 */;
import _mod13744 from "module_13744" /* 13744 */;

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
  return _mod13741.calendars[str] || _mod13741.calendars["001"].map((arg0) => {
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
  let v001 = _mod13742.hourCycles[formatted] || tmp2(13742).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13742).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13742).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13743.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13743).timezones[formatted], true);
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
  return _mod13744.weekData[str] || _mod13744.weekData["001"];
};