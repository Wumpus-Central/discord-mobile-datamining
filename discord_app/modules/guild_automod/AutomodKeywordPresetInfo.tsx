// === Module 17949: AutomodKeywordPresetInfo ===

// Module 17949 (AutomodKeywordPresetInfo)
import util from "util" /* 1115 */;
import Constants from "Constants" /* 12115 */;
import size from "module_2" /* 2 */;

const KeywordPreset = Constants.KeywordPreset;
const items = [, , ];
({ PROFANITY: arr[0], SLURS: arr[1], SEXUAL_CONTENT: arr[2] } = KeywordPreset);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodKeywordPresetInfo.tsx");

export const KEYWORD_PRESETS = items;
export const getKeywordPresetInfo = function getKeywordPresetInfo(item) {
  if (KeywordPreset.PROFANITY === item) {
    const obj2 = { headerText: null, subtitleText: null };
    const intl5 = util.intl;
    obj2.headerText = intl5.string(util.t["I+BDrH"]);
    const intl6 = util.intl;
    obj2.subtitleText = intl6.string(util.t.hISCms);
    return obj2;
  } else if (KeywordPreset.SLURS === item) {
    const obj3 = { headerText: null, subtitleText: null };
    const intl3 = util.intl;
    obj3.headerText = intl3.string(util.t["xjK2M/"]);
    const intl4 = util.intl;
    obj3.subtitleText = intl4.string(util.t.oJYXBG);
    return obj3;
  } else if (KeywordPreset.SEXUAL_CONTENT === item) {
    const obj = { headerText: null, subtitleText: null };
    const intl = util.intl;
    obj.headerText = intl.string(util.t.URSMet);
    const intl2 = util.intl;
    obj.subtitleText = intl2.string(util.t.oRQDBs);
    return obj;
  } else {
    return { headerText: "Error", subtitleText: "Unrecognized list" };
  }
};