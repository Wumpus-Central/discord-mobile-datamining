// === Module 4990: enableScreens ===

// Module 4990 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4997 */;
import _mod5006 from "module_5006" /* 5006 */;
import _mod5007 from "module_5007" /* 5007 */;
import _mod5014 from "module_5014" /* 5014 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5016 */;
import SearchBarDefault from "SearchBar" /* 5021 */;
import ScreenContainerDefault from "ScreenContainer" /* 5023 */;
import ScreenStackDefault from "ScreenStack" /* 5025 */;
import _modDef5029 from "module_5029" /* 5029 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5032 */;
import ScreenFooterDefault from "ScreenFooter" /* 5036 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5038 */;
import _modDef5040 from "module_5040" /* 5040 */;
import RNSModule from "RNSModule" /* 4991 */;

const require = globalThis.__r;
const _modDef5007 = _mod5007;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5006.enableScreens;
export const enableFreeze = _mod5006.enableFreeze;
export const screensEnabled = _mod5006.screensEnabled;
export const freezeEnabled = _mod5006.freezeEnabled;
export const Screen = _modDef5007;
export const InnerScreen = _mod5007.InnerScreen;
export const ScreenContext = _mod5007.ScreenContext;
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
export const ScreenStackItem = _modDef5029;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5014.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5014.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5040;