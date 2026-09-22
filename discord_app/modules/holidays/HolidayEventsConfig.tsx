// === Module 17798: HolidayEventsConfig ===

// Module 17798 (HolidayEventsConfig)
import util from "util" /* 1115 */;
import HalloweenHolidayExperimentDefault from "HalloweenHolidayExperiment" /* 17799 */;
import _modDef17800 from "module_17800" /* 17800 */;
import _modDef17801 from "module_17801" /* 17801 */;

require = fn;
const obj = {
  experiment: HalloweenHolidayExperimentDefault,
  useIsExperimentEligible() {
    return HalloweenHolidayExperimentDefault.useConfig({ location: "holiday_events_use_eligible" }).enabled;
  },
  getIsExperimentEligible() {
    return HalloweenHolidayExperimentDefault.getConfig({ location: "holiday_events_is_eligible" }).enabled;
  },
  startTimeMs: 1791388800000,
  endTimeMs: 1793638800000,
  isDesktopOnly: true,
  soundpack: fn(10166).Soundpacks.HALLOWEEN,
  soundpackLabel: fn(1115).t["+LasFV"],
  appSpinnerSources: { webmDark: _modDef17800, webmLight: _modDef17801 },
  coachmarkDismissibleContent: fn(2028).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025,
  coachmarkBackgroundColor: "#1170ed",
  getLoadingTips() {
    const intl = util.intl;
    const items = [intl.string(util.t.ydMZ2o), , , , , , , , , , , , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["AL/SoZ"]);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t.w2pMut);
    const intl4 = util.intl;
    items[3] = intl4.string(util.t.WB9eZl);
    const intl5 = util.intl;
    items[4] = intl5.string(util.t["rE+3z3"]);
    const intl6 = util.intl;
    items[5] = intl6.string(util.t.qvtjM4);
    const intl7 = util.intl;
    items[6] = intl7.string(util.t.irDT8W);
    const intl8 = util.intl;
    items[7] = intl8.string(util.t.TlJKIQ);
    const intl9 = util.intl;
    items[8] = intl9.string(util.t["m+xpaC"]);
    const intl10 = util.intl;
    items[9] = intl10.string(util.t.MElQEQ);
    const intl11 = util.intl;
    items[10] = intl11.string(util.t.aRr1um);
    const intl12 = util.intl;
    items[11] = intl12.string(util.t["7KOunu"]);
    const intl13 = util.intl;
    items[12] = intl13.string(util.t["1XGw3F"]);
    return items;
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };