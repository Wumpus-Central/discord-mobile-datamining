// === Module 6101: enableScreens ===

// Module 6101 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6108 */;
import _mod6117 from "module_6117" /* 6117 */;
import _mod6118 from "module_6118" /* 6118 */;
import _mod6125 from "module_6125" /* 6125 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6127 */;
import SearchBarDefault from "SearchBar" /* 6132 */;
import ScreenContainerDefault from "ScreenContainer" /* 6134 */;
import ScreenStackDefault from "ScreenStack" /* 6136 */;
import _modDef6140 from "module_6140" /* 6140 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6143 */;
import ScreenFooterDefault from "ScreenFooter" /* 6147 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6149 */;
import _modDef6151 from "module_6151" /* 6151 */;
import RNSModule from "RNSModule" /* 6102 */;

const require = globalThis.__r;
const _modDef6118 = _mod6118;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6117.enableScreens;
export const enableFreeze = _mod6117.enableFreeze;
export const screensEnabled = _mod6117.screensEnabled;
export const freezeEnabled = _mod6117.freezeEnabled;
export const Screen = _modDef6118;
export const InnerScreen = _mod6118.InnerScreen;
export const ScreenContext = _mod6118.ScreenContext;
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
export const ScreenStackItem = _modDef6140;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6125.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6125.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6151;