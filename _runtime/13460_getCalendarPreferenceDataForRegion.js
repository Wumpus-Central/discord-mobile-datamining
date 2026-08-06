// _runtime/13460_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13461__ } from "metro/13461__.js";
import { 13462__ } from "metro/13462__.js";
import { 13463__ } from "metro/13463__.js";
import { 13464__ } from "metro/13464__.js";
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
  return 13461__.calendars[str] || 13461__.calendars["001"].map((arg0) => {
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
  let v001 = 13462__.hourCycles[formatted] || tmp2(13462).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13462).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13462).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (13463__.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13463).timezones[formatted], true);
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
  return 13464__.weekData[str] || 13464__.weekData["001"];
};