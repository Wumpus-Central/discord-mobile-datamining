// === Module 19679: HolidayEventsConfig ===

// Module 19679 (HolidayEventsConfig)
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment" /* 19680 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default {
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
  soundpack: fn(10258).Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: fn(1112).t.Z5OQNp,
  coachmarkDismissibleContent: fn(4845).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026
};
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };