// === Module 5395: enableScreens ===

// Module 5395 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5402 */;
import _mod5411 from "module_5411" /* 5411 */;
import _mod5412 from "module_5412" /* 5412 */;
import _mod5419 from "module_5419" /* 5419 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5421 */;
import SearchBarDefault from "SearchBar" /* 5426 */;
import ScreenContainerDefault from "ScreenContainer" /* 5428 */;
import ScreenStackDefault from "ScreenStack" /* 5430 */;
import _modDef5434 from "module_5434" /* 5434 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5437 */;
import ScreenFooterDefault from "ScreenFooter" /* 5441 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5443 */;
import _modDef5445 from "module_5445" /* 5445 */;
import RNSModule from "RNSModule" /* 5396 */;

const require = globalThis.__r;
const _modDef5412 = _mod5412;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5411.enableScreens;
export const enableFreeze = _mod5411.enableFreeze;
export const screensEnabled = _mod5411.screensEnabled;
export const freezeEnabled = _mod5411.freezeEnabled;
export const Screen = _modDef5412;
export const InnerScreen = _mod5412.InnerScreen;
export const ScreenContext = _mod5412.ScreenContext;
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
export const ScreenStackItem = _modDef5434;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5419.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5419.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5445;