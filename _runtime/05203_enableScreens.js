// === Module 5203: enableScreens ===

// Module 5203 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5210 */;
import _mod5219 from "module_5219" /* 5219 */;
import _mod5220 from "module_5220" /* 5220 */;
import _mod5227 from "module_5227" /* 5227 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5229 */;
import SearchBarDefault from "SearchBar" /* 5234 */;
import ScreenContainerDefault from "ScreenContainer" /* 5236 */;
import ScreenStackDefault from "ScreenStack" /* 5238 */;
import _modDef5242 from "module_5242" /* 5242 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5245 */;
import ScreenFooterDefault from "ScreenFooter" /* 5249 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5251 */;
import _modDef5253 from "module_5253" /* 5253 */;
import RNSModule from "RNSModule" /* 5204 */;

const require = globalThis.__r;
const _modDef5220 = _mod5220;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5219.enableScreens;
export const enableFreeze = _mod5219.enableFreeze;
export const screensEnabled = _mod5219.screensEnabled;
export const freezeEnabled = _mod5219.freezeEnabled;
export const Screen = _modDef5220;
export const InnerScreen = _mod5220.InnerScreen;
export const ScreenContext = _mod5220.ScreenContext;
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
export const ScreenStackItem = _modDef5242;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5227.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5227.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5253;