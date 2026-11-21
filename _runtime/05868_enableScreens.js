// === Module 5868: enableScreens ===

// Module 5868 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5875 */;
import _mod5884 from "module_5884" /* 5884 */;
import _mod5885 from "module_5885" /* 5885 */;
import _mod5892 from "module_5892" /* 5892 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5894 */;
import SearchBarDefault from "SearchBar" /* 5899 */;
import ScreenContainerDefault from "ScreenContainer" /* 5901 */;
import ScreenStackDefault from "ScreenStack" /* 5903 */;
import _modDef5907 from "module_5907" /* 5907 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5910 */;
import ScreenFooterDefault from "ScreenFooter" /* 5914 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5916 */;
import _modDef5918 from "module_5918" /* 5918 */;
import RNSModule from "RNSModule" /* 5869 */;

const require = globalThis.__r;
const _modDef5885 = _mod5885;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5884.enableScreens;
export const enableFreeze = _mod5884.enableFreeze;
export const screensEnabled = _mod5884.screensEnabled;
export const freezeEnabled = _mod5884.freezeEnabled;
export const Screen = _modDef5885;
export const InnerScreen = _mod5885.InnerScreen;
export const ScreenContext = _mod5885.ScreenContext;
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
export const ScreenStackItem = _modDef5907;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5892.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5892.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5918;