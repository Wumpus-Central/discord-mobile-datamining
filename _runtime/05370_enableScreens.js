// === Module 5370: enableScreens ===

// Module 5370 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5377 */;
import _mod5386 from "module_5386" /* 5386 */;
import _mod5387 from "module_5387" /* 5387 */;
import _mod5394 from "module_5394" /* 5394 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5396 */;
import SearchBarDefault from "SearchBar" /* 5401 */;
import ScreenContainerDefault from "ScreenContainer" /* 5403 */;
import ScreenStackDefault from "ScreenStack" /* 5405 */;
import _modDef5409 from "module_5409" /* 5409 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5412 */;
import ScreenFooterDefault from "ScreenFooter" /* 5416 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5418 */;
import _modDef5420 from "module_5420" /* 5420 */;
import RNSModule from "RNSModule" /* 5371 */;

const require = globalThis.__r;
const _modDef5387 = _mod5387;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5386.enableScreens;
export const enableFreeze = _mod5386.enableFreeze;
export const screensEnabled = _mod5386.screensEnabled;
export const freezeEnabled = _mod5386.freezeEnabled;
export const Screen = _modDef5387;
export const InnerScreen = _mod5387.InnerScreen;
export const ScreenContext = _mod5387.ScreenContext;
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
export const ScreenStackItem = _modDef5409;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5394.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5394.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5420;