// === Module 7555: MIN_HEADER_HEIGHT ===

// Module 7555 (MIN_HEADER_HEIGHT)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const result = 2 * get_ActivityIndicator.StyleSheet.hairlineWidth;
const result1 = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MainTabsV2Constants.tsx");

export const MIN_HEADER_HEIGHT = 56;
export const HEADER_CORNER_RADIUS = 8;
export const getMinHeaderHeight = function getMinHeaderHeight(ClientThemesBackgroundStore) {
  let num = 56;
  if (obj.isMobileVisualRefreshEnabled(ClientThemesBackgroundStore)) {
    num = 64;
  }
  return num;
};
export const MIDNIGHT_BORDER_WIDTH = result;