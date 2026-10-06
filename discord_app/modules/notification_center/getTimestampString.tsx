// discord_app/modules/notification_center/getTimestampString.tsx
import intl7 from "../../intl/index.native.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import size from "../../../_runtime/metro/00002__.js";

function getDurationString(seconds) {
  let formatToPlainStringResult;
  seconds = seconds.seconds;
  const time = seconds.getFormatter();
  if (seconds < 60) {
    const intl6 = intl7.intl;
    formatToPlainStringResult = intl6.formatToPlainString(time.minutes, { minutes: 1 });
  } else if (seconds < 3600) {
    const intl5 = intl7.intl;
    const _Math5 = Math;
    const formatToPlainString5 = intl5.formatToPlainString;
    const minutes = time.minutes;
    const obj2 = { minutes: Math.floor(seconds / 60) };
    formatToPlainStringResult = formatToPlainString5(minutes, obj2);
  } else if (seconds < 86400) {
    const intl4 = intl7.intl;
    const _Math4 = Math;
    const formatToPlainString4 = intl4.formatToPlainString;
    const hours = time.hours;
    const obj3 = { hours: Math.floor(seconds / 3600) };
    formatToPlainStringResult = formatToPlainString4(hours, obj3);
  } else if (seconds < c3) {
    const intl3 = intl7.intl;
    const _Math3 = Math;
    const formatToPlainString3 = intl3.formatToPlainString;
    const days = time.days;
    const obj4 = { days: Math.floor(seconds / 86400) };
    formatToPlainStringResult = formatToPlainString3(days, obj4);
  } else if (seconds < c4) {
    const intl2 = intl7.intl;
    const _Math2 = Math;
    const formatToPlainString2 = intl2.formatToPlainString;
    const months = time.months;
    const obj5 = { months: Math.floor(seconds / tmp19) };
    formatToPlainStringResult = formatToPlainString2(months, obj5);
  } else {
    const intl = intl7.intl;
    const _Math = Math;
    const formatToPlainString = intl.formatToPlainString;
    const years = time.years;
    const obj = { years: Math.floor(seconds / tmp20) };
    formatToPlainStringResult = formatToPlainString(years, obj);
  }
  return formatToPlainStringResult;
}
let c3 = 2592000;
let c4 = 31104000;
const result = size.fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  let getFormatter;
  let obj2;
  let since;
  const obj = { seconds: obj2.diff(_modDef4467(since), "s"), getFormatter };
  ({ since, getFormatter } = arg0);
  obj2 = _modDef4467();
  return getDurationString(obj);
}
export const getAbbreviatedFormatter = function getAbbreviatedFormatter() {
  const time = {
    minutes: intl7.t["XIGt+W"],
    hours: intl7.t.rhY1Rs,
    days: intl7.t.GBLpQ8,
    months: intl7.t.XzBNbS,
    years: intl7.t.I1E8p6,
  };
  return time;
};
export const getFullFormatter = function getFullFormatter() {
  const time = {
    minutes: intl7.t["GqQ/Y9"],
    hours: intl7.t.c5zfWZ,
    days: intl7.t.amjnaI,
    months: intl7.t.SoON3V,
    years: intl7.t["12B3Re"],
  };
  return time;
};
export { getDurationString };
