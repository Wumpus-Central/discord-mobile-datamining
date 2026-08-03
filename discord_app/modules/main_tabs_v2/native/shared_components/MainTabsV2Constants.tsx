const result = 2 * require("get ActivityIndicator").StyleSheet.hairlineWidth;
const result1 = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MainTabsV2Constants.tsx");

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