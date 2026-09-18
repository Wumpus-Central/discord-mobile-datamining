// discord_common/js/shared/utils/NumberUtils.tsx
import index.native from "../i18n/index.native.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/NumberUtils.tsx");

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
    const NUMBER_ABBREVIATIONS_MILLION = module_2028.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj3 = { num: numberFormat1.format(communicators / 1000000) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj3);
  }
};