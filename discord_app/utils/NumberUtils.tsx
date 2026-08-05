// discord_app/utils/NumberUtils.tsx
let c2 = 1000000;
let result = require("set").fileFinishedImporting("utils/NumberUtils.tsx");

export const shortenAndLocalizeNumber = function shortenAndLocalizeNumber(count) {
  if (count < c2) {
    const intl2 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { value: null };
    obj[0] = count;
    return intl2.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t.OiHat3, obj);
  } else {
    const result = count / tmp;
    const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { value: null };
    obj[0] = result.toFixed(1);
    return intl.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t.Iku48I, obj);
  }
};
export const humanizeValue = function humanizeValue(newPostCount, stateFromStores) {
  if (newPostCount < 1000) {
    const intl2 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { value: null };
    const _Math2 = Math;
    obj[0] = Math.floor(newPostCount);
    return intl2.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t.OiHat3, obj);
  } else if (newPostCount < c2) {
    const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { value: null };
    const _Math = Math;
    obj[0] = Math.floor(newPostCount / 1000);
    return intl.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t["84R4Tc"], obj);
  } else {
    const _Math3 = Math;
    const _Intl = Intl;
    const result = Math.floor(10 * newPostCount / tmp7) / 10;
    const numberFormat = new Intl.NumberFormat(stateFromStores, { maximumFractionDigits: 1 });
    const intl3 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { value: null };
    obj[0] = numberFormat.format(result);
    return intl3.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t.Iku48I, obj);
  }
};
export const parseInteger = function parseInteger(discriminator, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = NaN;
  }
  if (null == discriminator) {
    return num;
  } else {
    const _parseInt = parseInt;
    let parsed = parseInt(discriminator);
    const _Number = Number;
    if (Number.isNaN(parsed)) {
      parsed = num;
    }
    return parsed;
  }
};
export const formatPercent = function formatPercent(arg0, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  obj = { style: "percent", minimumFractionDigits: 0 };
  const merged = Object.assign(obj);
  return Intl.NumberFormat(arg0, obj).format(arg1);
};