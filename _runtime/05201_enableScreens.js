// === Module 5201: enableScreens ===

// Module 5201 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5208 */;
import _mod5217 from "module_5217" /* 5217 */;
import _mod5218 from "module_5218" /* 5218 */;
import _mod5225 from "module_5225" /* 5225 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5227 */;
import SearchBarDefault from "SearchBar" /* 5232 */;
import ScreenContainerDefault from "ScreenContainer" /* 5234 */;
import ScreenStackDefault from "ScreenStack" /* 5236 */;
import _modDef5240 from "module_5240" /* 5240 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5243 */;
import ScreenFooterDefault from "ScreenFooter" /* 5247 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5249 */;
import _modDef5251 from "module_5251" /* 5251 */;
import RNSModule from "RNSModule" /* 5202 */;

const require = globalThis.__r;
const _modDef5218 = _mod5218;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5217.enableScreens;
export const enableFreeze = _mod5217.enableFreeze;
export const screensEnabled = _mod5217.screensEnabled;
export const freezeEnabled = _mod5217.freezeEnabled;
export const Screen = _modDef5218;
export const InnerScreen = _mod5218.InnerScreen;
export const ScreenContext = _mod5218.ScreenContext;
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
export const ScreenStackItem = _modDef5240;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5225.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5225.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5251;