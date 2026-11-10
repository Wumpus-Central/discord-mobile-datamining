// === Module 6100: enableScreens ===

// Module 6100 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6107 */;
import _mod6116 from "module_6116" /* 6116 */;
import _mod6117 from "module_6117" /* 6117 */;
import _mod6124 from "module_6124" /* 6124 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6126 */;
import SearchBarDefault from "SearchBar" /* 6131 */;
import ScreenContainerDefault from "ScreenContainer" /* 6133 */;
import ScreenStackDefault from "ScreenStack" /* 6135 */;
import _modDef6139 from "module_6139" /* 6139 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6142 */;
import ScreenFooterDefault from "ScreenFooter" /* 6146 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6148 */;
import _modDef6150 from "module_6150" /* 6150 */;
import RNSModule from "RNSModule" /* 6101 */;

const require = globalThis.__r;
const _modDef6117 = _mod6117;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6116.enableScreens;
export const enableFreeze = _mod6116.enableFreeze;
export const screensEnabled = _mod6116.screensEnabled;
export const freezeEnabled = _mod6116.freezeEnabled;
export const Screen = _modDef6117;
export const InnerScreen = _mod6117.InnerScreen;
export const ScreenContext = _mod6117.ScreenContext;
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
export const ScreenStackItem = _modDef6139;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6124.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6124.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6150;