// === Module 5367: enableScreens ===

// Module 5367 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5374 */;
import _mod5383 from "module_5383" /* 5383 */;
import _mod5384 from "module_5384" /* 5384 */;
import _mod5391 from "module_5391" /* 5391 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5393 */;
import SearchBarDefault from "SearchBar" /* 5398 */;
import ScreenContainerDefault from "ScreenContainer" /* 5400 */;
import ScreenStackDefault from "ScreenStack" /* 5402 */;
import _modDef5406 from "module_5406" /* 5406 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5409 */;
import ScreenFooterDefault from "ScreenFooter" /* 5413 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5415 */;
import _modDef5417 from "module_5417" /* 5417 */;
import RNSModule from "RNSModule" /* 5368 */;

const require = globalThis.__r;
const _modDef5384 = _mod5384;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5383.enableScreens;
export const enableFreeze = _mod5383.enableFreeze;
export const screensEnabled = _mod5383.screensEnabled;
export const freezeEnabled = _mod5383.freezeEnabled;
export const Screen = _modDef5384;
export const InnerScreen = _mod5384.InnerScreen;
export const ScreenContext = _mod5384.ScreenContext;
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
export const ScreenStackItem = _modDef5406;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5391.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5391.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5417;