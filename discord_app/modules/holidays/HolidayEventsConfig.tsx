// discord_app/modules/holidays/HolidayEventsConfig.tsx
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment.tsx";
import _modDef19582 from "../../../_runtime/metro/19582__.js";
import _modDef19583 from "../../../_runtime/metro/19583__.js";
import _modDef19584 from "../../../_runtime/metro/19584__.js";
import _modDef19585 from "../../../_runtime/metro/19585__.js";

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
  soundpack: fn(10823).Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: fn(1113).t.Z5OQNp,
  appSpinnerSources: { movDark: _modDef19582, movLight: _modDef19583, webmDark: _modDef19584, webmLight: _modDef19585 },
  coachmarkDismissibleContent: fn(4625).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
