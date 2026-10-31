// === Module 16461: useHexagonCampaignNewFontBadge ===

// Module 16461 (useHexagonCampaignNewFontBadge)
import initialize from "initialize" /* 504 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5042 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16452 */;
import noop from "module_19" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 16462 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16222 */;

const require = globalThis.__r;

require = fn;
const HexagonCampaignConstants = fn(5039);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: hasOwnProperty, HexagonCampaignPerk: metroRequire, HexagonCampaignPerkAvailability: closure_7 } = HexagonCampaignConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignNewFontBadge.tsx");

export function useHexagonCampaignNewFontBadge(DisplayNameStylesEditScreen) {
  let tmp = HexagonCampaignPerkAvailability.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  const items = [DisplayNameStylesSeenStore];
  if (tmp) {
    tmp = !obj2.useStateFromStores(items, () => {
      seenFonts = seenFonts.getSeenFonts();
      return seenFonts.has(closure_1_5);
    });
  }
  obj2 = initialize;
  return {
    showCampaignFontBadge: tmp,
    dismissCampaignFontBadge: noop.useCallback(() => {
      const result = require("DisplayNameStylesActionCreators").markDisplayNameStyleFontSeen(closure_1_5);
    }, [])
  };
}
export function useHexagonCampaignHasVisitedDisplayNameStyles() {
  const items = [HexagonCampaignPersistedStore];
  return initialize.useStateFromStores(items, () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles);
}
export function useMarkHexagonCampaignDisplayNameStylesVisited(DisplayNameStylesEditScreen) {
  let tmp = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  _require = tmp;
  let obj = require("HexagonCampaignPerkAvailability");
  const items = [HexagonCampaignPersistedStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles);
  const items1 = [tmp, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      const result = HexagonActionCreators.markHexagonCampaignDisplayNameStylesVisited();
    }
  }, items1);
}