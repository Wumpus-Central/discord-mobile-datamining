// === Module 5871: enableScreens ===

// Module 5871 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5878 */;
import _mod5887 from "module_5887" /* 5887 */;
import _mod5888 from "module_5888" /* 5888 */;
import _mod5895 from "module_5895" /* 5895 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5897 */;
import SearchBarDefault from "SearchBar" /* 5902 */;
import ScreenContainerDefault from "ScreenContainer" /* 5904 */;
import ScreenStackDefault from "ScreenStack" /* 5906 */;
import _modDef5910 from "module_5910" /* 5910 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5913 */;
import ScreenFooterDefault from "ScreenFooter" /* 5917 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5919 */;
import _modDef5921 from "module_5921" /* 5921 */;
import RNSModule from "RNSModule" /* 5872 */;

const require = globalThis.__r;
const _modDef5888 = _mod5888;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5887.enableScreens;
export const enableFreeze = _mod5887.enableFreeze;
export const screensEnabled = _mod5887.screensEnabled;
export const freezeEnabled = _mod5887.freezeEnabled;
export const Screen = _modDef5888;
export const InnerScreen = _mod5888.InnerScreen;
export const ScreenContext = _mod5888.ScreenContext;
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
export const ScreenStackItem = _modDef5910;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5895.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5895.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5921;