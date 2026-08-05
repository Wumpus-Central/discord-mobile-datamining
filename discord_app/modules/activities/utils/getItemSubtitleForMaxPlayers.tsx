// discord_app/modules/activities/utils/getItemSubtitleForMaxPlayers.tsx
import { getSystemLocale } from "../../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(arg0) {
  if (arg0 > 0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = arg0;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t["p/YmkR"], obj);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(getSystemLocale /* getSystemLocale */.t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1 - " + arg0;
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    combined = intl.string(getSystemLocale /* getSystemLocale */.t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1-" + arg0;
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    combined = intl.string(getSystemLocale /* getSystemLocale */.t.zMNEiF);
  }
  return combined;
};