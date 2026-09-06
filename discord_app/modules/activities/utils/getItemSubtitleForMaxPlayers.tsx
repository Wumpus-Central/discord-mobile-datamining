// === Module 12146: getItemSubtitleForMaxPlayers ===

// Module 12146 (getItemSubtitleForMaxPlayers)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(count) {
  if (count > 0) {
    const intl2 = util.intl;
    const obj = { count };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t["p/YmkR"], obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1 - " + arg0;
  } else {
    const intl = util.intl;
    combined = intl.string(util.t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1-" + arg0;
  } else {
    const intl = util.intl;
    combined = intl.string(util.t.zMNEiF);
  }
  return combined;
};