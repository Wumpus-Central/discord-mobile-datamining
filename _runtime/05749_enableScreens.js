// === Module 5749: enableScreens ===

// Module 5749 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5756 */;
import _mod5765 from "module_5765" /* 5765 */;
import _mod5766 from "module_5766" /* 5766 */;
import _mod5773 from "module_5773" /* 5773 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5775 */;
import SearchBarDefault from "SearchBar" /* 5780 */;
import ScreenContainerDefault from "ScreenContainer" /* 5782 */;
import ScreenStackDefault from "ScreenStack" /* 5784 */;
import _modDef5788 from "module_5788" /* 5788 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5791 */;
import ScreenFooterDefault from "ScreenFooter" /* 5795 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5797 */;
import _modDef5799 from "module_5799" /* 5799 */;
import RNSModule from "RNSModule" /* 5750 */;

const require = globalThis.__r;
const _modDef5766 = _mod5766;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5765.enableScreens;
export const enableFreeze = _mod5765.enableFreeze;
export const screensEnabled = _mod5765.screensEnabled;
export const freezeEnabled = _mod5765.freezeEnabled;
export const Screen = _modDef5766;
export const InnerScreen = _mod5766.InnerScreen;
export const ScreenContext = _mod5766.ScreenContext;
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
export const ScreenStackItem = _modDef5788;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5773.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5773.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5799;