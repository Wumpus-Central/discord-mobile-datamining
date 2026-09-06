// discord_app/modules/holidays/HolidayEventsConfig.tsx
import util from "../../intl/index.native.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import Constants from "../soundpacks/Constants.tsx";
import _modDef17382 from "../../../_runtime/metro/17382__.js";
import _modDef17383 from "../../../_runtime/metro/17383__.js";
import size from "../../../_runtime/metro/00002__.js";

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
  coachmarkBackgroundColor: "#1170ed",
};
obj = { webmDark: _modDef17382, webmLight: _modDef17383 };
obj.appSpinnerSources = obj;
obj.coachmarkDismissibleContent = dismissible_content.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
