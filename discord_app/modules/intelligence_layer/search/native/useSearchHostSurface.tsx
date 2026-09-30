// === Module 16736: useSearchHostSurface ===

// Module 16736 (useSearchHostSurface)
import nativeDefault from "native" /* 576 */;
import Link from "Link" /* 1486 */;
import useToken from "useToken" /* 4561 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16683 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export const useSearchHostSurfaceColor = function useSearchHostSurfaceColor() {
  const route = Link.useRoute();
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    let MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken.useToken(MOBILE_ACTIONSHEET_BACKGROUND);
};