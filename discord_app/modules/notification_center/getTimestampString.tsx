// discord_app/modules/notification_center/getTimestampString.tsx
import util from "../../intl/index.native.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import size from "../../../_runtime/metro/00002__.js";

function getDurationString(seconds) {
  seconds = seconds.seconds;
  const time = seconds.getFormatter();
  if (seconds < 60) {
    const intl6 = util.intl;
    let formatToPlainStringResult = intl6.formatToPlainString(time.minutes, { minutes: 1 });
  } else if (seconds < 3600) {
    const intl5 = util.intl;
    let obj = { minutes: null };
    const _Math5 = Math;
    obj.minutes = Math.floor(seconds / 60);
    formatToPlainStringResult = intl5.formatToPlainString(time.minutes, obj);
  } else if (seconds < 86400) {
    const intl4 = util.intl;
    obj = { hours: null };
    const _Math4 = Math;
    obj.hours = Math.floor(seconds / 3600);
    formatToPlainStringResult = intl4.formatToPlainString(time.hours, obj);
  } else if (seconds < c3) {
    const intl3 = util.intl;
    const obj1 = { days: null };
    const _Math3 = Math;
    obj1.days = Math.floor(seconds / 86400);
    formatToPlainStringResult = intl3.formatToPlainString(time.days, obj1);
  } else if (seconds < c4) {
    const intl2 = util.intl;
    const obj2 = { months: null };
    const _Math2 = Math;
    obj2.months = Math.floor(seconds / tmp19);
    formatToPlainStringResult = intl2.formatToPlainString(time.months, obj2);
  } else {
    const intl = util.intl;
    obj = { years: null };
    const _Math = Math;
    obj.years = Math.floor(seconds / tmp20);
    formatToPlainStringResult = intl.formatToPlainString(time.years, obj);
  }
  return formatToPlainStringResult;
}
let c3 = 2592000;
let c4 = 31104000;
const result = size.fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  const obj = { seconds: _modDef4153().diff(_modDef4153(since), "s"), getFormatter };
  ({ since, getFormatter } = arg0);
  return getDurationString(obj);
}
export const getAbbreviatedFormatter = function getAbbreviatedFormatter() {
  const time = {
    minutes: util.t["XIGt+W"],
    hours: util.t.rhY1Rs,
    days: util.t.GBLpQ8,
    months: util.t.XzBNbS,
    years: util.t.I1E8p6,
  };
  return time;
};
export const getFullFormatter = function getFullFormatter() {
  const time = {
    minutes: util.t["GqQ/Y9"],
    hours: util.t.c5zfWZ,
    days: util.t.amjnaI,
    months: util.t.SoON3V,
    years: util.t["12B3Re"],
  };
  return time;
};
export { getDurationString };
