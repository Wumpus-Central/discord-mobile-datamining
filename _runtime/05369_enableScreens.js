// === Module 5369: enableScreens ===

// Module 5369 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5376 */;
import _mod5385 from "module_5385" /* 5385 */;
import _mod5386 from "module_5386" /* 5386 */;
import _mod5393 from "module_5393" /* 5393 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5395 */;
import SearchBarDefault from "SearchBar" /* 5400 */;
import ScreenContainerDefault from "ScreenContainer" /* 5402 */;
import ScreenStackDefault from "ScreenStack" /* 5404 */;
import _modDef5408 from "module_5408" /* 5408 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5411 */;
import ScreenFooterDefault from "ScreenFooter" /* 5415 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5417 */;
import _modDef5419 from "module_5419" /* 5419 */;
import RNSModule from "RNSModule" /* 5370 */;

const require = globalThis.__r;
const _modDef5386 = _mod5386;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5385.enableScreens;
export const enableFreeze = _mod5385.enableFreeze;
export const screensEnabled = _mod5385.screensEnabled;
export const freezeEnabled = _mod5385.freezeEnabled;
export const Screen = _modDef5386;
export const InnerScreen = _mod5386.InnerScreen;
export const ScreenContext = _mod5386.ScreenContext;
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
export const ScreenStackItem = _modDef5408;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5393.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5393.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5419;