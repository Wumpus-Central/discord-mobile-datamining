// === Module 5896: enableScreens ===

// Module 5896 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5903 */;
import _mod5912 from "module_5912" /* 5912 */;
import _mod5913 from "module_5913" /* 5913 */;
import _mod5920 from "module_5920" /* 5920 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5922 */;
import SearchBarDefault from "SearchBar" /* 5927 */;
import ScreenContainerDefault from "ScreenContainer" /* 5929 */;
import ScreenStackDefault from "ScreenStack" /* 5931 */;
import _modDef5935 from "module_5935" /* 5935 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5938 */;
import ScreenFooterDefault from "ScreenFooter" /* 5942 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5944 */;
import _modDef5946 from "module_5946" /* 5946 */;
import RNSModule from "RNSModule" /* 5897 */;

const require = globalThis.__r;
const _modDef5913 = _mod5913;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5912.enableScreens;
export const enableFreeze = _mod5912.enableFreeze;
export const screensEnabled = _mod5912.screensEnabled;
export const freezeEnabled = _mod5912.freezeEnabled;
export const Screen = _modDef5913;
export const InnerScreen = _mod5913.InnerScreen;
export const ScreenContext = _mod5913.ScreenContext;
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
export const ScreenStackItem = _modDef5935;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5920.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5920.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5946;