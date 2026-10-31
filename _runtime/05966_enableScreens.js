// === Module 5966: enableScreens ===

// Module 5966 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5973 */;
import _mod5982 from "module_5982" /* 5982 */;
import _mod5983 from "module_5983" /* 5983 */;
import _mod5990 from "module_5990" /* 5990 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5992 */;
import SearchBarDefault from "SearchBar" /* 5997 */;
import ScreenContainerDefault from "ScreenContainer" /* 5999 */;
import ScreenStackDefault from "ScreenStack" /* 6001 */;
import _modDef6005 from "module_6005" /* 6005 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6008 */;
import ScreenFooterDefault from "ScreenFooter" /* 6012 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6014 */;
import _modDef6016 from "module_6016" /* 6016 */;
import RNSModule from "RNSModule" /* 5967 */;

const require = globalThis.__r;
const _modDef5983 = _mod5983;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5982.enableScreens;
export const enableFreeze = _mod5982.enableFreeze;
export const screensEnabled = _mod5982.screensEnabled;
export const freezeEnabled = _mod5982.freezeEnabled;
export const Screen = _modDef5983;
export const InnerScreen = _mod5983.InnerScreen;
export const ScreenContext = _mod5983.ScreenContext;
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
export const ScreenStackItem = _modDef6005;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5990.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5990.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6016;