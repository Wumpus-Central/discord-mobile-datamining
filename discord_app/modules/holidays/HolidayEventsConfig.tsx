// === Module 16593: HolidayEmojiAnimationType ===

// Module 16593 (HolidayEmojiAnimationType)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import Soundpacks from "Soundpacks" /* 10042 */;
import registerAssetDefault from "registerAsset" /* 16594 */;
import registerAssetDefault2 from "registerAsset" /* 16595 */;

let obj = {
  experiment: null,
  useIsExperimentEligible() {
    return false;
  },
  getIsExperimentEligible() {
    return false;
  },
  startTimeMs: 1766163600000,
  endTimeMs: 1767632400000,
  isDesktopOnly: true,
  soundpack: Soundpacks.Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: getSystemLocale.t.Z5OQNp,
  appSpinnerSources: null,
  coachmarkDismissibleContent: null,
  coachmarkBackgroundColor: "#1170ed"
};
obj = { webmDark: registerAssetDefault, webmLight: registerAssetDefault2 };
obj[8] = obj;
obj[9] = DismissibleContent.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
const result = set.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };