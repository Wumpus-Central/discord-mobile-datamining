// discord_app/modules/intelligence_layer/search/native/useSearchHostSurface.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../../_runtime/01485_Link.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import SearchNavigatorConstants from "../../../search/native/components/navigator/SearchNavigatorConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
