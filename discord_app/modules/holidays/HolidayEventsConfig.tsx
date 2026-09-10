// === Module 17474: HolidayEventsConfig ===

// Module 17474 (HolidayEventsConfig)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import Constants from "Constants" /* 9974 */;
import _modDef17475 from "module_17475" /* 17475 */;
import _modDef17476 from "module_17476" /* 17476 */;
import size from "module_2" /* 2 */;

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
  soundpack: Constants.Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: util.t.Z5OQNp,
  appSpinnerSources: null,
  coachmarkDismissibleContent: null,
  coachmarkBackgroundColor: "#1170ed"
};
obj = { webmDark: _modDef17475, webmLight: _modDef17476 };
obj.appSpinnerSources = obj;
obj.coachmarkDismissibleContent = dismissible_content.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };