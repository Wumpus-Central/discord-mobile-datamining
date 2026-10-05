// discord_app/modules/guild_automod/AutomodKeywordPresetInfo.tsx
import intl7 from "../../intl/index.native.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const KeywordPreset = Constants.KeywordPreset;
const items = [, ,];
({ PROFANITY: arr[0], SLURS: arr[1], SEXUAL_CONTENT: arr[2] } = KeywordPreset);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodKeywordPresetInfo.tsx");

export const KEYWORD_PRESETS = items;
export const getKeywordPresetInfo = function getKeywordPresetInfo(item) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  if (KeywordPreset.PROFANITY === item) {
    const obj2 = { headerText: intl5.string(intl7.t["I+BDrH"]), subtitleText: intl6.string(intl7.t.hISCms) };
    intl5 = intl7.intl;
    intl6 = intl7.intl;
    return obj2;
  } else if (KeywordPreset.SLURS === item) {
    const obj3 = { headerText: intl3.string(intl7.t["xjK2M/"]), subtitleText: intl4.string(intl7.t.oJYXBG) };
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    return obj3;
  } else if (KeywordPreset.SEXUAL_CONTENT === item) {
    const obj = { headerText: intl.string(intl7.t.URSMet), subtitleText: intl2.string(intl7.t.oRQDBs) };
    intl = intl7.intl;
    intl2 = intl7.intl;
    return obj;
  } else {
    return { headerText: "Error", subtitleText: "Unrecognized list" };
  }
};
