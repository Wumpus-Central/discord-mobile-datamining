// === Module 20102: HolidayEventsConfig ===

// Module 20102 (HolidayEventsConfig)
import util from "util" /* 1113 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import Constants from "Constants" /* 10966 */;
import _modDef20103 from "module_20103" /* 20103 */;
import _modDef20104 from "module_20104" /* 20104 */;
import size from "module_2" /* 2 */;

const obj = {
  experiment: null,
  useIsExperimentEligible() {
    return false;
  },
  getIsExperimentEligible() {
    return false;
  },
  startTimeMs: 1791388800000,
  endTimeMs: 1793638800000,
  isDesktopOnly: true,
  soundpack: Constants.Soundpacks.HALLOWEEN,
  soundpackLabel: util.t["+LasFV"],
  appSpinnerSources: { webmDark: _modDef20103, webmLight: _modDef20104 },
  getLoadingTips() {
    const intl = util.intl;
    items = [intl.string(util.t.ydMZ2o), , , , , , , , , , , , ];
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
  },
  coachmarkDismissibleContent: dismissible_content.DismissibleContent.HOLIDAY_COACHMARK_HALLOWEEN_2026
};
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };