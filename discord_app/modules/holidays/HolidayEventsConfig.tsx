// === Module 19525: HolidayEventsConfig ===

// Module 19525 (HolidayEventsConfig)
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment" /* 19526 */;
import _modDef19527 from "module_19527" /* 19527 */;
import _modDef19528 from "module_19528" /* 19528 */;
import _modDef19529 from "module_19529" /* 19529 */;
import _modDef19530 from "module_19530" /* 19530 */;

const obj = {
  experiment: HolidayRingtoneExperimentDefault,
  useIsExperimentEligible() {
    return HolidayRingtoneExperimentDefault.useConfig({ location: "holiday_events_use_eligible" }).enabled;
  },
  getIsExperimentEligible() {
    return HolidayRingtoneExperimentDefault.getConfig({ location: "holiday_events_is_eligible" }).enabled;
  },
  startTimeMs: 1797267600000,
  endTimeMs: 1799082000000,
  isDesktopOnly: true,
  soundpack: fn(10885).Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: fn(1112).t.Z5OQNp,
  appSpinnerSources: { movDark: _modDef19527, movLight: _modDef19528, webmDark: _modDef19529, webmLight: _modDef19530 },
  coachmarkDismissibleContent: fn(4746).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };