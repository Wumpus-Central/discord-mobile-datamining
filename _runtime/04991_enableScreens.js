// === Module 4991: enableScreens ===

// Module 4991 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4998 */;
import _mod5007 from "module_5007" /* 5007 */;
import _mod5008 from "module_5008" /* 5008 */;
import _mod5015 from "module_5015" /* 5015 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5017 */;
import SearchBarDefault from "SearchBar" /* 5022 */;
import ScreenContainerDefault from "ScreenContainer" /* 5024 */;
import ScreenStackDefault from "ScreenStack" /* 5026 */;
import _modDef5030 from "module_5030" /* 5030 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5033 */;
import ScreenFooterDefault from "ScreenFooter" /* 5037 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5039 */;
import _modDef5041 from "module_5041" /* 5041 */;
import RNSModule from "RNSModule" /* 4992 */;

const require = globalThis.__r;
const _modDef5008 = _mod5008;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5007.enableScreens;
export const enableFreeze = _mod5007.enableFreeze;
export const screensEnabled = _mod5007.screensEnabled;
export const freezeEnabled = _mod5007.freezeEnabled;
export const Screen = _modDef5008;
export const InnerScreen = _mod5008.InnerScreen;
export const ScreenContext = _mod5008.ScreenContext;
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
export const ScreenStackItem = _modDef5030;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5015.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5015.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5041;