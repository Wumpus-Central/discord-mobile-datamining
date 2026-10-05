// discord_app/modules/holidays/HolidayEventsConfig.tsx
import intl14 from "../../intl/index.native.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import Constants from "../soundpacks/Constants.tsx";
import HalloweenHolidayExperimentDefault from "HalloweenHolidayExperiment.tsx";
import AssetRegistryDefault from "../../../_runtime/17512_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../_runtime/17513_AssetRegistry.js";
import size from "../../../_runtime/metro/00002__.js";

let Soundpacks;
let obj = {
  experiment: HalloweenHolidayExperimentDefault,
  useIsExperimentEligible() {
    const obj = HalloweenHolidayExperimentDefault;
    return obj.useConfig({ location: "holiday_events_use_eligible" }).enabled;
  },
  getIsExperimentEligible() {
    const obj = HalloweenHolidayExperimentDefault;
    return obj.getConfig({ location: "holiday_events_is_eligible" }).enabled;
  },
  startTimeMs: 1791388800000,
  endTimeMs: 1793638800000,
  isDesktopOnly: true,
  soundpack: Soundpacks.HALLOWEEN,
  soundpackLabel: intl14.t["+LasFV"],
  appSpinnerSources: { webmDark: AssetRegistryDefault, webmLight: AssetRegistryDefault2 },
  getLoadingTips() {
    const intl = intl14.intl;
    const items = [intl.string(intl14.t.ydMZ2o), , , , , , , , , , , ,];
    const intl2 = intl14.intl;
    items[1] = intl2.string(intl14.t["AL/SoZ"]);
    const intl3 = intl14.intl;
    items[2] = intl3.string(intl14.t.w2pMut);
    const intl4 = intl14.intl;
    items[3] = intl4.string(intl14.t.WB9eZl);
    const intl5 = intl14.intl;
    items[4] = intl5.string(intl14.t["rE+3z3"]);
    const intl6 = intl14.intl;
    items[5] = intl6.string(intl14.t.qvtjM4);
    const intl7 = intl14.intl;
    items[6] = intl7.string(intl14.t.irDT8W);
    const intl8 = intl14.intl;
    items[7] = intl8.string(intl14.t.TlJKIQ);
    const intl9 = intl14.intl;
    items[8] = intl9.string(intl14.t["m+xpaC"]);
    const intl10 = intl14.intl;
    items[9] = intl10.string(intl14.t.MElQEQ);
    const intl11 = intl14.intl;
    items[10] = intl11.string(intl14.t.aRr1um);
    const intl12 = intl14.intl;
    items[11] = intl12.string(intl14.t["7KOunu"]);
    const intl13 = intl14.intl;
    items[12] = intl13.string(intl14.t["1XGw3F"]);
    return items;
  },
  coachmarkDismissibleContent: dismissible_content.DismissibleContent.HOLIDAY_COACHMARK_HALLOWEEN_2026,
};
Soundpacks = Constants.Soundpacks;
({ webmDark: AssetRegistryDefault, webmLight: AssetRegistryDefault2 });
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
