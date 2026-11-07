// === Module 6098: enableScreens ===

// Module 6098 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6105 */;
import _mod6114 from "module_6114" /* 6114 */;
import _mod6115 from "module_6115" /* 6115 */;
import _mod6122 from "module_6122" /* 6122 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6124 */;
import SearchBarDefault from "SearchBar" /* 6129 */;
import ScreenContainerDefault from "ScreenContainer" /* 6131 */;
import ScreenStackDefault from "ScreenStack" /* 6133 */;
import _modDef6137 from "module_6137" /* 6137 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6140 */;
import ScreenFooterDefault from "ScreenFooter" /* 6144 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6146 */;
import _modDef6148 from "module_6148" /* 6148 */;
import RNSModule from "RNSModule" /* 6099 */;

const require = globalThis.__r;
const _modDef6115 = _mod6115;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6114.enableScreens;
export const enableFreeze = _mod6114.enableFreeze;
export const screensEnabled = _mod6114.screensEnabled;
export const freezeEnabled = _mod6114.freezeEnabled;
export const Screen = _modDef6115;
export const InnerScreen = _mod6115.InnerScreen;
export const ScreenContext = _mod6115.ScreenContext;
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
export const ScreenStackItem = _modDef6137;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6122.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6122.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6148;