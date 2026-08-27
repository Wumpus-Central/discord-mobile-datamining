// _runtime/13840_getCalendarPreferenceDataForRegion.js
import e from "01281_e.js";
import _mod13841 from "metro/13841__.js";
import _mod13842 from "metro/13842__.js";
import _mod13843 from "metro/13843__.js";
import _mod13844 from "metro/13844__.js";

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
  return _mod13841.calendars[str] || _mod13841.calendars["001"].map((arg0) => {
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
  let v001 = _mod13842.hourCycles[formatted] || tmp2(13842).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13842).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13842).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod13843.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13843).timezones[formatted], true);
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
  return _mod13844.weekData[str] || _mod13844.weekData["001"];
};