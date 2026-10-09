// === Module 5306: enableScreens ===

// Module 5306 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5313 */;
import _mod5322 from "module_5322" /* 5322 */;
import _mod5323 from "module_5323" /* 5323 */;
import _mod5330 from "module_5330" /* 5330 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5332 */;
import SearchBarDefault from "SearchBar" /* 5337 */;
import ScreenContainerDefault from "ScreenContainer" /* 5339 */;
import ScreenStackDefault from "ScreenStack" /* 5341 */;
import _modDef5345 from "module_5345" /* 5345 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5348 */;
import ScreenFooterDefault from "ScreenFooter" /* 5352 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5354 */;
import _modDef5356 from "module_5356" /* 5356 */;
import RNSModule from "RNSModule" /* 5307 */;

const require = globalThis.__r;
const _modDef5323 = _mod5323;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5322.enableScreens;
export const enableFreeze = _mod5322.enableFreeze;
export const screensEnabled = _mod5322.screensEnabled;
export const freezeEnabled = _mod5322.freezeEnabled;
export const Screen = _modDef5323;
export const InnerScreen = _mod5323.InnerScreen;
export const ScreenContext = _mod5323.ScreenContext;
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
export const ScreenStackItem = _modDef5345;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5330.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5330.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5356;