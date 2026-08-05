// discord_app/modules/activities/utils/getItemSubtitleForMaxPlayers.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(arg0) {
  if (arg0 > 0) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = arg0;
    let formatToPlainStringResult = intl2.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["p/YmkR"], obj);
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1 - " + arg0;
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    combined = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1-" + arg0;
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    combined = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.zMNEiF);
  }
  return combined;
};