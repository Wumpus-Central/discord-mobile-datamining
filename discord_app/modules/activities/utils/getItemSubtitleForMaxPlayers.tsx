// === Module 11770: getItemSubtitleForMaxPlayers ===

// Module 11770 (getItemSubtitleForMaxPlayers)
import intl3 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(count) {
  let formatToPlainStringResult;
  if (count > 0) {
    const intl2 = intl3.intl;
    const obj = { count };
    formatToPlainStringResult = intl2.formatToPlainString(intl3.t["p/YmkR"], obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(intl3.t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  let combined;
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    combined = "1 - " + arg0;
  } else {
    const intl = intl3.intl;
    combined = intl.string(intl3.t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  let combined;
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    combined = "1-" + arg0;
  } else {
    const intl = intl3.intl;
    combined = intl.string(intl3.t.zMNEiF);
  }
  return combined;
};