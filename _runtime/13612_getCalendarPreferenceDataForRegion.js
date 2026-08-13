// _runtime/13612_getCalendarPreferenceDataForRegion.js
import { e } from "01281_e.js";
import { 13613__ } from "metro/13613__.js";
import { 13614__ } from "metro/13614__.js";
import { 13615__ } from "metro/13615__.js";
import { 13616__ } from "metro/13616__.js";
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
  return 13613__.calendars[str] || 13613__.calendars["001"].map((arg0) => {
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
  let v001 = 13614__.hourCycles[formatted] || tmp2(13614).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13614).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13614).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (13615__.timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13615).timezones[formatted], true);
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
  return 13616__.weekData[str] || 13616__.weekData["001"];
};