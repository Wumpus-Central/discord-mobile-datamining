// discord_app/modules/holidays/HolidayEventsConfig.tsx
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment.tsx";
import _modDef19527 from "../../../_runtime/metro/19527__.js";
import _modDef19528 from "../../../_runtime/metro/19528__.js";
import _modDef19529 from "../../../_runtime/metro/19529__.js";
import _modDef19530 from "../../../_runtime/metro/19530__.js";

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
  coachmarkDismissibleContent: fn(4746).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
