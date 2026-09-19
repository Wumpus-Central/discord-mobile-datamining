// === Module 1881: NumberUtils ===

// Module 1881 (NumberUtils)
import module_1882 from "module_1882" /* 1882 */;

let c1 = 1000000;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/NumberUtils.tsx");

export const shortenAndLocalizeNumber = function shortenAndLocalizeNumber(count) {
  if (count < c1) {
    const _Intl = Intl;
    const numberFormat = new Intl.NumberFormat(module_1882.getLocale());
    return numberFormat.format(count);
  } else {
    const result = count / tmp;
    const NUMBER_ABBREVIATIONS_MILLION = module_1882.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj = { num: result.toFixed(1) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj);
  }
};
export const humanizeValue = function humanizeValue(newPostCount, stateFromStores) {
  if (newPostCount < 1000) {
    const _Intl = Intl;
    const numberFormat = new Intl.NumberFormat(stateFromStores);
    const _Math2 = Math;
    return numberFormat.format(Math.floor(newPostCount));
  } else if (newPostCount < c1) {
    const NUMBER_ABBREVIATIONS_THOUSAND = module_1882.Messages.NUMBER_ABBREVIATIONS_THOUSAND;
    const obj = { num: null };
    const _Math = Math;
    obj.num = Math.floor(newPostCount / 1000);
    return NUMBER_ABBREVIATIONS_THOUSAND.format(obj);
  } else {
    const _Math3 = Math;
    const _Intl2 = Intl;
    const result = Math.floor(10 * newPostCount / tmp8) / 10;
    const numberFormat1 = new Intl.NumberFormat(stateFromStores, { maximumFractionDigits: 1 });
    const NUMBER_ABBREVIATIONS_MILLION = module_1882.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj2 = { num: numberFormat1.format(result) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj2);
  }
};
export const truncateAndLocalizeNumber = (communicators, stateFromStores) => {
  if (communicators < 1000000) {
    const _Intl = Intl;
    let num2 = 1;
    if (tmp % 1 === 0) {
      num2 = 0;
    }
    const obj2 = { maximumFractionDigits: num2 };
    const numberFormat = new Intl.NumberFormat(stateFromStores, obj2);
    return numberFormat.format(communicators);
  } else {
    const _Math = Math;
    const _Intl2 = Intl;
    let num = 1;
    if (Math.round(communicators / 1000000 * 10) / 10 % 1 === 0) {
      num = 0;
    }
    const obj = { maximumFractionDigits: num };
    const numberFormat1 = new Intl.NumberFormat(stateFromStores, obj);
    const NUMBER_ABBREVIATIONS_MILLION = module_1882.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj3 = { num: numberFormat1.format(communicators / 1000000) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj3);
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
export const formatPercent = function formatPercent(locale, percentComplete, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const merged = Object.assign(obj);
  return Intl.NumberFormat(locale, { style: "percent", minimumFractionDigits: 0 }).format(percentComplete);
};