// discord_app/modules/holidays/HolidayEventsConfig.tsx
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment.tsx";
import _modDef19400 from "../../../_runtime/metro/19400__.js";
import _modDef19401 from "../../../_runtime/metro/19401__.js";
import _modDef19402 from "../../../_runtime/metro/19402__.js";
import _modDef19403 from "../../../_runtime/metro/19403__.js";

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
  soundpack: fn(10765).Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: fn(1112).t.Z5OQNp,
  appSpinnerSources: { movDark: _modDef19400, movLight: _modDef19401, webmDark: _modDef19402, webmLight: _modDef19403 },
  coachmarkDismissibleContent: fn(4627).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
