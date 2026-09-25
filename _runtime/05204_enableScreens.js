// === Module 5204: enableScreens ===

// Module 5204 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5211 */;
import _mod5220 from "module_5220" /* 5220 */;
import _mod5221 from "module_5221" /* 5221 */;
import _mod5228 from "module_5228" /* 5228 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5230 */;
import SearchBarDefault from "SearchBar" /* 5235 */;
import ScreenContainerDefault from "ScreenContainer" /* 5237 */;
import ScreenStackDefault from "ScreenStack" /* 5239 */;
import _modDef5243 from "module_5243" /* 5243 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5246 */;
import ScreenFooterDefault from "ScreenFooter" /* 5250 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5252 */;
import _modDef5254 from "module_5254" /* 5254 */;
import RNSModule from "RNSModule" /* 5205 */;

const require = globalThis.__r;
const _modDef5221 = _mod5221;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5220.enableScreens;
export const enableFreeze = _mod5220.enableFreeze;
export const screensEnabled = _mod5220.screensEnabled;
export const freezeEnabled = _mod5220.freezeEnabled;
export const Screen = _modDef5221;
export const InnerScreen = _mod5221.InnerScreen;
export const ScreenContext = _mod5221.ScreenContext;
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
export const ScreenStackItem = _modDef5243;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5228.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5228.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5254;