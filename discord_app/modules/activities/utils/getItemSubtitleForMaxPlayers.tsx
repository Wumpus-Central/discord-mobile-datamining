// === Module 11324: getItemSubtitleForMaxPlayers ===

// Module 11324 (getItemSubtitleForMaxPlayers)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(arg0) {
  if (arg0 > 0) {
    const intl2 = getSystemLocale.intl;
    const obj = { count: null };
    obj[0] = arg0;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t["p/YmkR"], obj);
  } else {
    const intl = getSystemLocale.intl;
    formatToPlainStringResult = intl.string(getSystemLocale.t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1 - " + arg0;
  } else {
    const intl = getSystemLocale.intl;
    combined = intl.string(getSystemLocale.t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1-" + arg0;
  } else {
    const intl = getSystemLocale.intl;
    combined = intl.string(getSystemLocale.t.zMNEiF);
  }
  return combined;
};