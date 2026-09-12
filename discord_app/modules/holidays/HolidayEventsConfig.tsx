// === Module 17494: HolidayEventsConfig ===

// Module 17494 (HolidayEventsConfig)
import util from "util" /* 1114 */;
import HalloweenHolidayExperimentDefault from "HalloweenHolidayExperiment" /* 17495 */;
import _modDef17496 from "module_17496" /* 17496 */;
import _modDef17497 from "module_17497" /* 17497 */;

require = fn;
let obj = {
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
  soundpack: fn(10034).Soundpacks.HALLOWEEN,
  soundpackLabel: fn(1114).t["+LasFV"],
  appSpinnerSources: null,
  coachmarkDismissibleContent: null,
  coachmarkBackgroundColor: "#1170ed",
  getLoadingTips: null
};
obj = { webmDark: _modDef17496, webmLight: _modDef17497 };
obj.appSpinnerSources = obj;
obj.coachmarkDismissibleContent = fn(1943).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
obj.getLoadingTips = function getLoadingTips() {
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
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };