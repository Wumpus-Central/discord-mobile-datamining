// === Module 17093: useHexagonCampaignNewFontBadge ===

// Module 17093 (useHexagonCampaignNewFontBadge)
import initialize from "initialize" /* 504 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5336 */;
import QuestTypes from "QuestTypes" /* 5341 */;
import HexagonActionCreators from "HexagonActionCreators" /* 17084 */;
import HexagonCampaignAnalytics from "HexagonCampaignAnalytics" /* 17085 */;
import noop from "module_19" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 17094 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;

const require = globalThis.__r;

require = fn;
const HexagonCampaignConstants = fn(5331);
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
export function useHexagonCampaignDisplayNameStylePromo(arg0) {
  ({ displayNameStyles, disabled } = arg0);
  ({ location: _location, isTryItOut } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let tmp3 = !disabled;
  if (!disabled) {
    tmp3 = obj.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, _location) === constants2.SELECTABLE;
  }
  if (tmp3) {
    tmp3 = true !== isTryItOut;
  }
  if (tmp3) {
    let fontId;
    if (displayNameStyles != null) {
      fontId = displayNameStyles.fontId;
    }
    tmp3 = fontId !== hasOwnProperty;
  }
  obj = HexagonCampaignPerkAvailability;
  const trackHexagonCampaignContentViewed = HexagonCampaignAnalytics.useTrackHexagonCampaignContentViewed(QuestTypes.QuestContent.DISPLAY_NAME_STYLES_SETTINGS, HexagonCampaignAnalytics.HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp3);
  const tmpResult = HexagonCampaignAnalytics;
  items = [HexagonCampaignPersistedStore];
  const obj2 = { showCampaignPromo: tmp3, showCampaignNewBadge: null };
  if (tmp3) {
    tmp3 = !tmpResult2.useStateFromStores(items, () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles);
  }
  obj2.showCampaignNewBadge = tmp3;
  return obj2;
}