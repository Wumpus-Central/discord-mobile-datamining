// discord_common/js/shared/utils/NumberUtils.tsx
import index.native from "../i18n/index.native.tsx";

let c1 = 1000000;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/NumberUtils.tsx");

export const shortenAndLocalizeNumber = function shortenAndLocalizeNumber(count) {
  if (count < c1) {
    locale = module_1889.getLocale();
    const _HermesInternal = HermesInternal;
    const combined = "" + locale + "|" + "";
    value = map.get(combined);
    if (null == value) {
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(locale, undefined);
      const result = map.set(combined, numberFormat);
      value = numberFormat;
    }
    return value.format(count);
  } else {
    const result1 = count / tmp;
    const NUMBER_ABBREVIATIONS_MILLION = module_1889.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj = { num: result1.toFixed(1) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj);
  }
};
export const humanizeValue = function humanizeValue(newPostCount, stateFromStores) {
  if (newPostCount < 1000) {
    const _HermesInternal = HermesInternal;
    const combined = "" + stateFromStores + "|" + "";
    value = map.get(combined);
    if (null == value) {
      const _Intl2 = Intl;
      const numberFormat = new Intl.NumberFormat(stateFromStores, undefined);
      const result = map.set(combined, numberFormat);
      value = numberFormat;
    }
    const _Math2 = Math;
    return value.format(Math.floor(newPostCount));
  } else if (newPostCount < c1) {
    const NUMBER_ABBREVIATIONS_THOUSAND = module_1889.Messages.NUMBER_ABBREVIATIONS_THOUSAND;
    const obj = { num: null };
    const _Math = Math;
    obj.num = Math.floor(newPostCount / 1000);
    return NUMBER_ABBREVIATIONS_THOUSAND.format(obj);
  } else {
    const _Math3 = Math;
    const _HermesInternal2 = HermesInternal;
    const result1 = Math.floor(10 * newPostCount / tmp19) / 10;
    const combined1 = "" + stateFromStores + "|" + 1;
    value2 = map.get(combined1);
    if (null == value2) {
      const _Intl = Intl;
      const numberFormat1 = new Intl.NumberFormat(stateFromStores, { maximumFractionDigits: 1 });
      const result2 = map.set(combined1, numberFormat1);
      value2 = numberFormat1;
    }
    const NUMBER_ABBREVIATIONS_MILLION = module_1889.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj2 = { num: value2.format(result1) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj2);
  }
};
export const truncateAndLocalizeNumber = (communicators, stateFromStores) => {
  if (communicators < 1000000) {
    let num2 = 1;
    if (tmp % 1 === 0) {
      num2 = 0;
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "" + stateFromStores + "|" + num2;
    value = map.get(combined);
    if (null == value) {
      const _Intl2 = Intl;
      const obj2 = { maximumFractionDigits: num2 };
      const numberFormat = new Intl.NumberFormat(stateFromStores, obj2);
      const result = map.set(combined, numberFormat);
      value = numberFormat;
    }
    return value.format(communicators);
  } else {
    const _Math = Math;
    let num = 1;
    if (Math.round(communicators / 1000000 * 10) / 10 % 1 === 0) {
      num = 0;
    }
    const _HermesInternal = HermesInternal;
    const combined1 = "" + stateFromStores + "|" + num;
    value2 = map.get(combined1);
    if (null == value2) {
      const _Intl = Intl;
      const obj3 = { maximumFractionDigits: num };
      const numberFormat1 = new Intl.NumberFormat(stateFromStores, obj3);
      const result1 = map.set(combined1, numberFormat1);
      value2 = numberFormat1;
    }
    const NUMBER_ABBREVIATIONS_MILLION = module_1889.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj4 = { num: value2.format(communicators / 1000000) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj4);
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
export const formatPercent = function formatPercent(stateFromStores, percentComplete, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const merged = Object.assign(obj);
  return Intl.NumberFormat(stateFromStores, { style: "percent", minimumFractionDigits: 0 }).format(percentComplete);
};