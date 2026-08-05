// _runtime/13451_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13452__ } from "metro/13452__.js";
import { 13453__ } from "metro/13453__.js";
import { 13454__ } from "metro/13454__.js";
import { 13455__ } from "metro/13455__.js";
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
  return 13452__.calendars[str] || 13452__.calendars["001"].map((arg0) => {
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
  let v001 = 13453__.hourCycles[formatted] || tmp2(13453).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13453).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13453).hourCycles["001"];
  }
  return e /* e */.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (13454__.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13454).timezones[formatted], true);
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
  return 13455__.weekData[str] || 13455__.weekData["001"];
};