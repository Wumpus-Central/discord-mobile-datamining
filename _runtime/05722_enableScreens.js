// === Module 5722: enableScreens ===

// Module 5722 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5729 */;
import _mod5738 from "module_5738" /* 5738 */;
import _mod5739 from "module_5739" /* 5739 */;
import _mod5746 from "module_5746" /* 5746 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5748 */;
import SearchBarDefault from "SearchBar" /* 5753 */;
import ScreenContainerDefault from "ScreenContainer" /* 5755 */;
import ScreenStackDefault from "ScreenStack" /* 5757 */;
import _modDef5761 from "module_5761" /* 5761 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5764 */;
import ScreenFooterDefault from "ScreenFooter" /* 5768 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5770 */;
import _modDef5772 from "module_5772" /* 5772 */;
import RNSModule from "RNSModule" /* 5723 */;

const require = globalThis.__r;
const _modDef5739 = _mod5739;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5738.enableScreens;
export const enableFreeze = _mod5738.enableFreeze;
export const screensEnabled = _mod5738.screensEnabled;
export const freezeEnabled = _mod5738.freezeEnabled;
export const Screen = _modDef5739;
export const InnerScreen = _mod5739.InnerScreen;
export const ScreenContext = _mod5739.ScreenContext;
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
export const ScreenStackItem = _modDef5761;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5746.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5746.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5772;