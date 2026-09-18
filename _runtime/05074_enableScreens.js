// === Module 5074: enableScreens ===

// Module 5074 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5081 */;
import _mod5090 from "module_5090" /* 5090 */;
import _mod5091 from "module_5091" /* 5091 */;
import _mod5098 from "module_5098" /* 5098 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5100 */;
import SearchBarDefault from "SearchBar" /* 5105 */;
import ScreenContainerDefault from "ScreenContainer" /* 5107 */;
import ScreenStackDefault from "ScreenStack" /* 5109 */;
import _modDef5113 from "module_5113" /* 5113 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5116 */;
import ScreenFooterDefault from "ScreenFooter" /* 5120 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5122 */;
import _modDef5124 from "module_5124" /* 5124 */;
import RNSModule from "RNSModule" /* 5075 */;

const require = globalThis.__r;
const _modDef5091 = _mod5091;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5090.enableScreens;
export const enableFreeze = _mod5090.enableFreeze;
export const screensEnabled = _mod5090.screensEnabled;
export const freezeEnabled = _mod5090.freezeEnabled;
export const Screen = _modDef5091;
export const InnerScreen = _mod5091.InnerScreen;
export const ScreenContext = _mod5091.ScreenContext;
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
export const ScreenStackItem = _modDef5113;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5098.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5098.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5124;