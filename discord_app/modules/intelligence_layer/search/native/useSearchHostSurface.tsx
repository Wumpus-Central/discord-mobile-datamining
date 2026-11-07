// === Module 19111: useSearchHostSurface ===

// Module 19111 (useSearchHostSurface)
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1500 */;
import useToken from "useToken" /* 5724 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 19053 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export function useSearchHostSurfaceColor() {
  const route = Link.useRoute();
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    let MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken.useToken(MOBILE_ACTIONSHEET_BACKGROUND);
}