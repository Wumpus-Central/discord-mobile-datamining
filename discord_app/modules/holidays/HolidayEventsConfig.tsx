// discord_app/modules/holidays/HolidayEventsConfig.tsx
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment.tsx";
import _modDef19586 from "../../../_runtime/metro/19586__.js";
import _modDef19587 from "../../../_runtime/metro/19587__.js";
import _modDef19588 from "../../../_runtime/metro/19588__.js";
import _modDef19589 from "../../../_runtime/metro/19589__.js";

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
  soundpack: fn(10845).Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: fn(1113).t.Z5OQNp,
  appSpinnerSources: { movDark: _modDef19586, movLight: _modDef19587, webmDark: _modDef19588, webmLight: _modDef19589 },
  coachmarkDismissibleContent: fn(4656).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
