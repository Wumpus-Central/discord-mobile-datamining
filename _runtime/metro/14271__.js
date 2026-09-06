// _runtime/metro/14271__.js
import e from "../01162_e.js";
import calendars from "../14272_calendars.js";
import hourCycles from "../14273_hourCycles.js";
import timezones from "../14274_timezones.js";
import weekData from "../14275_weekData.js";

require = arg1;
const dependencyMap = arg6;

export const getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return (
    calendars.calendars[str] ||
    calendars.calendars["001"].map((item) => {
      let str = "gregory";
      if ("gregorian" !== item) {
        let str2 = "islamicc";
        if ("islamic-civil" !== item) {
          str2 = item;
        }
        str = str2;
      }
      return str;
    })
  );
};
export const getHourCyclesPreferenceDataForLocaleOrRegion = function getHourCyclesPreferenceDataForLocaleOrRegion(
  locale,
  region,
) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = hourCycles.hourCycles[formatted] || tmp2(14273).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14273).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14273).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
export const getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (timezones.timezones[formatted]) {
    return tmp2(1162).__spreadArray(items, tmp2(14274).timezones[formatted], true);
  } else {
    return items;
  }
};
export const getWeekDataForRegion = function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "001";
  }
  return weekData.weekData[str] || weekData.weekData["001"];
};
