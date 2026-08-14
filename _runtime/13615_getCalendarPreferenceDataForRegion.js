// _runtime/13615_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13616__ } from "metro/13616__.js";
import { 13617__ } from "metro/13617__.js";
import { 13618__ } from "metro/13618__.js";
import { 13619__ } from "metro/13619__.js";
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
  return 13616__.calendars[str] || 13616__.calendars["001"].map((arg0) => {
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
  let v001 = 13617__.hourCycles[formatted] || tmp2(13617).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13617).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13617).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (13618__.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13618).timezones[formatted], true);
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
  return 13619__.weekData[str] || 13619__.weekData["001"];
};