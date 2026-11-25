// === Module 6023: enableScreens ===

// Module 6023 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6030 */;
import _mod6039 from "module_6039" /* 6039 */;
import _mod6040 from "module_6040" /* 6040 */;
import _mod6047 from "module_6047" /* 6047 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6049 */;
import SearchBarDefault from "SearchBar" /* 6054 */;
import ScreenContainerDefault from "ScreenContainer" /* 6056 */;
import ScreenStackDefault from "ScreenStack" /* 6058 */;
import _modDef6062 from "module_6062" /* 6062 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6065 */;
import ScreenFooterDefault from "ScreenFooter" /* 6069 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6071 */;
import _modDef6073 from "module_6073" /* 6073 */;
import RNSModule from "RNSModule" /* 6024 */;

const require = globalThis.__r;
const _modDef6040 = _mod6040;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6039.enableScreens;
export const enableFreeze = _mod6039.enableFreeze;
export const screensEnabled = _mod6039.screensEnabled;
export const freezeEnabled = _mod6039.freezeEnabled;
export const Screen = _modDef6040;
export const InnerScreen = _mod6040.InnerScreen;
export const ScreenContext = _mod6040.ScreenContext;
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
export const ScreenStackItem = _modDef6062;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6047.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6047.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6073;