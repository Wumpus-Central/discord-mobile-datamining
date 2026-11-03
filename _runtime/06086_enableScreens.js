// === Module 6086: enableScreens ===

// Module 6086 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6093 */;
import _mod6102 from "module_6102" /* 6102 */;
import _mod6103 from "module_6103" /* 6103 */;
import _mod6110 from "module_6110" /* 6110 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6112 */;
import SearchBarDefault from "SearchBar" /* 6117 */;
import ScreenContainerDefault from "ScreenContainer" /* 6119 */;
import ScreenStackDefault from "ScreenStack" /* 6121 */;
import _modDef6125 from "module_6125" /* 6125 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6128 */;
import ScreenFooterDefault from "ScreenFooter" /* 6132 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6134 */;
import _modDef6136 from "module_6136" /* 6136 */;
import RNSModule from "RNSModule" /* 6087 */;

const require = globalThis.__r;
const _modDef6103 = _mod6103;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6102.enableScreens;
export const enableFreeze = _mod6102.enableFreeze;
export const screensEnabled = _mod6102.screensEnabled;
export const freezeEnabled = _mod6102.freezeEnabled;
export const Screen = _modDef6103;
export const InnerScreen = _mod6103.InnerScreen;
export const ScreenContext = _mod6103.ScreenContext;
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
export const ScreenStackItem = _modDef6125;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6110.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6110.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6136;