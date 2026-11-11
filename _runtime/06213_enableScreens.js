// === Module 6213: enableScreens ===

// Module 6213 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6220 */;
import _mod6229 from "module_6229" /* 6229 */;
import _mod6230 from "module_6230" /* 6230 */;
import _mod6237 from "module_6237" /* 6237 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6239 */;
import SearchBarDefault from "SearchBar" /* 6244 */;
import ScreenContainerDefault from "ScreenContainer" /* 6246 */;
import ScreenStackDefault from "ScreenStack" /* 6248 */;
import _modDef6252 from "module_6252" /* 6252 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6255 */;
import ScreenFooterDefault from "ScreenFooter" /* 6259 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6261 */;
import _modDef6263 from "module_6263" /* 6263 */;
import RNSModule from "RNSModule" /* 6214 */;

const require = globalThis.__r;
const _modDef6230 = _mod6230;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6229.enableScreens;
export const enableFreeze = _mod6229.enableFreeze;
export const screensEnabled = _mod6229.screensEnabled;
export const freezeEnabled = _mod6229.freezeEnabled;
export const Screen = _modDef6230;
export const InnerScreen = _mod6230.InnerScreen;
export const ScreenContext = _mod6230.ScreenContext;
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
export const ScreenStackItem = _modDef6252;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6237.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6237.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6263;