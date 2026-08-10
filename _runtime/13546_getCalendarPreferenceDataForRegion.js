// _runtime/13546_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13547__ } from "metro/13547__.js";
import { 13548__ } from "metro/13548__.js";
import { 13549__ } from "metro/13549__.js";
import { 13550__ } from "metro/13550__.js";
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
  return 13547__.calendars[str] || 13547__.calendars["001"].map((arg0) => {
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
  let v001 = 13548__.hourCycles[formatted] || tmp2(13548).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13548).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13548).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (13549__.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13549).timezones[formatted], true);
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
  return 13550__.weekData[str] || 13550__.weekData["001"];
};