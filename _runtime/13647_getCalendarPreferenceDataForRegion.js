// _runtime/13647_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13648__ } from "metro/13648__.js";
import { 13649__ } from "metro/13649__.js";
import { 13650__ } from "metro/13650__.js";
import { 13651__ } from "metro/13651__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return 13648__.calendars[str] || 13648__.calendars["001"].map((arg0) => {
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
  let v001 = 13649__.hourCycles[formatted] || tmp2(13649).hourCycles[str];
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
  if (13650__.timezones[formatted]) {
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
  return 13651__.weekData[str] || 13651__.weekData["001"];
};