// _runtime/13603_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13604__ } from "metro/13604__.js";
import { 13605__ } from "metro/13605__.js";
import { 13606__ } from "metro/13606__.js";
import { 13607__ } from "metro/13607__.js";
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
  return 13604__.calendars[str] || 13604__.calendars["001"].map((arg0) => {
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
  let v001 = 13605__.hourCycles[formatted] || tmp2(13605).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13605).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13605).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (13606__.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13606).timezones[formatted], true);
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
  return 13607__.weekData[str] || 13607__.weekData["001"];
};