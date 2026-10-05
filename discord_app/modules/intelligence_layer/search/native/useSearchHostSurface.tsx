// discord_app/modules/intelligence_layer/search/native/useSearchHostSurface.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../../_runtime/01491_Link.js";
import useToken2 from "../../../../design/tokens/native/useToken.tsx";
import SearchNavigatorConstants from "../../../search/native/components/navigator/SearchNavigatorConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let MOBILE_ACTIONSHEET_BACKGROUND;
      const obj = Link;
      const route = obj.useRoute();
      const useToken = useToken2.useToken;
      useToken2;
      if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
        MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
      } else {
        MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
      }
      return useToken(MOBILE_ACTIONSHEET_BACKGROUND);
    }
  : () => {
      let MOBILE_ACTIONSHEET_BACKGROUND;
      const obj = Link;
      const route = obj.useRoute();
      const useToken = useToken2.useToken;
      useToken2;
      if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
        MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
      } else {
        MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
      }
      return useToken(MOBILE_ACTIONSHEET_BACKGROUND);
    };
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export const useSearchHostSurfaceColor = tmp2;
