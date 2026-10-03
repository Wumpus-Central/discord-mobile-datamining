// === Module 5715: enableScreens ===

// Module 5715 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5722 */;
import _mod5731 from "module_5731" /* 5731 */;
import _mod5732 from "module_5732" /* 5732 */;
import _mod5739 from "module_5739" /* 5739 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5741 */;
import SearchBarDefault from "SearchBar" /* 5746 */;
import ScreenContainerDefault from "ScreenContainer" /* 5748 */;
import ScreenStackDefault from "ScreenStack" /* 5750 */;
import _modDef5754 from "module_5754" /* 5754 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5757 */;
import ScreenFooterDefault from "ScreenFooter" /* 5761 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5763 */;
import _modDef5765 from "module_5765" /* 5765 */;
import RNSModule from "RNSModule" /* 5716 */;

const require = globalThis.__r;
const _modDef5732 = _mod5732;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5731.enableScreens;
export const enableFreeze = _mod5731.enableFreeze;
export const screensEnabled = _mod5731.screensEnabled;
export const freezeEnabled = _mod5731.freezeEnabled;
export const Screen = _modDef5732;
export const InnerScreen = _mod5732.InnerScreen;
export const ScreenContext = _mod5732.ScreenContext;
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
export const ScreenStackItem = _modDef5754;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5739.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5739.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5765;