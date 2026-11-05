// === Module 16732: useHexagonCampaignNewFontBadge ===

// Module 16732 (useHexagonCampaignNewFontBadge)
import initialize from "initialize" /* 504 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5171 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16723 */;
import noop from "module_19" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 16733 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16484 */;

const require = globalThis.__r;

require = fn;
const HexagonCampaignConstants = fn(5168);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: hasOwnProperty, HexagonCampaignPerk: closure_6, HexagonCampaignPerkAvailability: metroImportDefault } = HexagonCampaignConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignNewFontBadge.tsx");

export function useHexagonCampaignNewFontBadge(DisplayNameStylesEditScreen) {
  let tmp = HexagonCampaignPerkAvailability.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  items = [DisplayNameStylesSeenStore];
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
  items = [HexagonCampaignPersistedStore];
  return initialize.useStateFromStores(items, () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles);
}
export function useMarkHexagonCampaignDisplayNameStylesVisited(DisplayNameStylesEditScreen) {
  let tmp = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  _require = tmp;
  let obj = require("HexagonCampaignPerkAvailability");
  items = [HexagonCampaignPersistedStore];
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