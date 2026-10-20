// === Module 5874: enableScreens ===

// Module 5874 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5881 */;
import _mod5890 from "module_5890" /* 5890 */;
import _mod5891 from "module_5891" /* 5891 */;
import _mod5898 from "module_5898" /* 5898 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5900 */;
import SearchBarDefault from "SearchBar" /* 5905 */;
import ScreenContainerDefault from "ScreenContainer" /* 5907 */;
import ScreenStackDefault from "ScreenStack" /* 5909 */;
import _modDef5913 from "module_5913" /* 5913 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5916 */;
import ScreenFooterDefault from "ScreenFooter" /* 5920 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5922 */;
import _modDef5924 from "module_5924" /* 5924 */;
import RNSModule from "RNSModule" /* 5875 */;

const require = globalThis.__r;
const _modDef5891 = _mod5891;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5890.enableScreens;
export const enableFreeze = _mod5890.enableFreeze;
export const screensEnabled = _mod5890.screensEnabled;
export const freezeEnabled = _mod5890.freezeEnabled;
export const Screen = _modDef5891;
export const InnerScreen = _mod5891.InnerScreen;
export const ScreenContext = _mod5891.ScreenContext;
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
export const ScreenStackItem = _modDef5913;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5898.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5898.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5924;