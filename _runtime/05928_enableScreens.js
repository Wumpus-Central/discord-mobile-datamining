// === Module 5928: enableScreens ===

// Module 5928 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5935 */;
import _mod5944 from "module_5944" /* 5944 */;
import _mod5945 from "module_5945" /* 5945 */;
import _mod5952 from "module_5952" /* 5952 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5954 */;
import SearchBarDefault from "SearchBar" /* 5959 */;
import ScreenContainerDefault from "ScreenContainer" /* 5961 */;
import ScreenStackDefault from "ScreenStack" /* 5963 */;
import _modDef5967 from "module_5967" /* 5967 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5970 */;
import ScreenFooterDefault from "ScreenFooter" /* 5974 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5976 */;
import _modDef5978 from "module_5978" /* 5978 */;
import RNSModule from "RNSModule" /* 5929 */;

const require = globalThis.__r;
const _modDef5945 = _mod5945;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5944.enableScreens;
export const enableFreeze = _mod5944.enableFreeze;
export const screensEnabled = _mod5944.screensEnabled;
export const freezeEnabled = _mod5944.freezeEnabled;
export const Screen = _modDef5945;
export const InnerScreen = _mod5945.InnerScreen;
export const ScreenContext = _mod5945.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef5967;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5952.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5952.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5978;