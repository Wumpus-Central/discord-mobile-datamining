// === Module 6104: enableScreens ===

// Module 6104 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6111 */;
import _mod6120 from "module_6120" /* 6120 */;
import _mod6121 from "module_6121" /* 6121 */;
import _mod6128 from "module_6128" /* 6128 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6130 */;
import SearchBarDefault from "SearchBar" /* 6135 */;
import ScreenContainerDefault from "ScreenContainer" /* 6137 */;
import ScreenStackDefault from "ScreenStack" /* 6139 */;
import _modDef6143 from "module_6143" /* 6143 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6146 */;
import ScreenFooterDefault from "ScreenFooter" /* 6150 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6152 */;
import _modDef6154 from "module_6154" /* 6154 */;
import RNSModule from "RNSModule" /* 6105 */;

const require = globalThis.__r;
const _modDef6121 = _mod6121;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6120.enableScreens;
export const enableFreeze = _mod6120.enableFreeze;
export const screensEnabled = _mod6120.screensEnabled;
export const freezeEnabled = _mod6120.freezeEnabled;
export const Screen = _modDef6121;
export const InnerScreen = _mod6121.InnerScreen;
export const ScreenContext = _mod6121.ScreenContext;
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
export const ScreenStackItem = _modDef6143;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6128.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6128.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6154;