// === Module 17321: useSearchHostSurface ===

// Module 17321 (useSearchHostSurface)
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1504 */;
import useToken from "useToken" /* 4779 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 17263 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export const useSearchHostSurfaceColor = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchHostSurfaceColor() {
  const route = Link.useRoute();
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    let MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken.useToken(MOBILE_ACTIONSHEET_BACKGROUND);
}) : (function useSearchHostSurfaceColor() {
  const route = Link.useRoute();
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    let MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken.useToken(MOBILE_ACTIONSHEET_BACKGROUND);
});