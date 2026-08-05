// discord_app/modules/notification_center/getTimestampString.tsx
function getDurationString(seconds) {
  seconds = seconds.seconds;
  const formatter = seconds.getFormatter();
  if (seconds < 60) {
    const intl6 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let formatToPlainStringResult = intl6.formatToPlainString(formatter.minutes, { minutes: 1 });
  } else if (seconds < 3600) {
    const intl5 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { minutes: null };
    const _Math5 = Math;
    obj[0] = Math.floor(seconds / 60);
    formatToPlainStringResult = intl5.formatToPlainString(formatter.minutes, obj);
  } else if (seconds < 86400) {
    const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { hours: null };
    const _Math4 = Math;
    obj[0] = Math.floor(seconds / 3600);
    formatToPlainStringResult = intl4.formatToPlainString(formatter.hours, obj);
  } else if (seconds < c3) {
    const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj1 = { days: null };
    const _Math3 = Math;
    obj1[0] = Math.floor(seconds / 86400);
    formatToPlainStringResult = intl3.formatToPlainString(formatter.days, obj1);
  } else if (seconds < c4) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj2 = { months: null };
    const _Math2 = Math;
    obj2[0] = Math.floor(seconds / tmp20);
    formatToPlainStringResult = intl2.formatToPlainString(formatter.months, obj2);
  } else {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { years: null };
    const _Math = Math;
    obj[0] = Math.floor(seconds / tmp21);
    formatToPlainStringResult = intl.formatToPlainString(formatter.years, obj);
  }
  return formatToPlainStringResult;
}
let c3 = 2592000;
let c4 = 31104000;
const result = require("set").fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  let getFormatter;
  let since;
  const obj = { seconds: null, getFormatter: null };
  ({ since, getFormatter } = arg0);
  obj[0] = require("../../../_runtime/03867_t.js")().diff(require("../../../_runtime/03867_t.js")(since), "s");
  obj[1] = getFormatter;
  return getDurationString(obj);
};
export const getAbbreviatedFormatter = function getAbbreviatedFormatter() {
  return { minutes: require("../../intl/index.native.tsx") /* getSystemLocale */.t["XIGt+W"], hours: require("../../intl/index.native.tsx") /* getSystemLocale */.t.rhY1Rs, days: require("../../intl/index.native.tsx") /* getSystemLocale */.t.GBLpQ8, months: require("../../intl/index.native.tsx") /* getSystemLocale */.t.XzBNbS, years: require("../../intl/index.native.tsx") /* getSystemLocale */.t.I1E8p6 };
};
export const getFullFormatter = function getFullFormatter() {
  return { minutes: require("../../intl/index.native.tsx") /* getSystemLocale */.t["GqQ/Y9"], hours: require("../../intl/index.native.tsx") /* getSystemLocale */.t.c5zfWZ, days: require("../../intl/index.native.tsx") /* getSystemLocale */.t.amjnaI, months: require("../../intl/index.native.tsx") /* getSystemLocale */.t.SoON3V, years: require("../../intl/index.native.tsx") /* getSystemLocale */.t["12B3Re"] };
};
export { getDurationString };