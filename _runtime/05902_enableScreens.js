// === Module 5902: enableScreens ===

// Module 5902 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5909 */;
import _mod5918 from "module_5918" /* 5918 */;
import _mod5919 from "module_5919" /* 5919 */;
import _mod5926 from "module_5926" /* 5926 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5928 */;
import SearchBarDefault from "SearchBar" /* 5933 */;
import ScreenContainerDefault from "ScreenContainer" /* 5935 */;
import ScreenStackDefault from "ScreenStack" /* 5937 */;
import _modDef5941 from "module_5941" /* 5941 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5944 */;
import ScreenFooterDefault from "ScreenFooter" /* 5948 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5950 */;
import _modDef5952 from "module_5952" /* 5952 */;
import RNSModule from "RNSModule" /* 5903 */;

const require = globalThis.__r;
const _modDef5919 = _mod5919;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5918.enableScreens;
export const enableFreeze = _mod5918.enableFreeze;
export const screensEnabled = _mod5918.screensEnabled;
export const freezeEnabled = _mod5918.freezeEnabled;
export const Screen = _modDef5919;
export const InnerScreen = _mod5919.InnerScreen;
export const ScreenContext = _mod5919.ScreenContext;
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
export const ScreenStackItem = _modDef5941;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5926.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5926.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5952;