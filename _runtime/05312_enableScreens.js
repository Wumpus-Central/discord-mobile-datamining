// === Module 5312: enableScreens ===

// Module 5312 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5319 */;
import _mod5328 from "module_5328" /* 5328 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5336 from "module_5336" /* 5336 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5338 */;
import SearchBarDefault from "SearchBar" /* 5343 */;
import ScreenContainerDefault from "ScreenContainer" /* 5345 */;
import ScreenStackDefault from "ScreenStack" /* 5347 */;
import _modDef5351 from "module_5351" /* 5351 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5354 */;
import ScreenFooterDefault from "ScreenFooter" /* 5358 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5360 */;
import _modDef5362 from "module_5362" /* 5362 */;
import RNSModule from "RNSModule" /* 5313 */;

const require = globalThis.__r;
const _modDef5329 = _mod5329;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5328.enableScreens;
export const enableFreeze = _mod5328.enableFreeze;
export const screensEnabled = _mod5328.screensEnabled;
export const freezeEnabled = _mod5328.freezeEnabled;
export const Screen = _modDef5329;
export const InnerScreen = _mod5329.InnerScreen;
export const ScreenContext = _mod5329.ScreenContext;
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
export const ScreenStackItem = _modDef5351;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5336.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5336.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5362;