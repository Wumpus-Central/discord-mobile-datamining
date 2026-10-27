// === Module 5917: enableScreens ===

// Module 5917 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5924 */;
import _mod5933 from "module_5933" /* 5933 */;
import _mod5934 from "module_5934" /* 5934 */;
import _mod5941 from "module_5941" /* 5941 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5943 */;
import SearchBarDefault from "SearchBar" /* 5948 */;
import ScreenContainerDefault from "ScreenContainer" /* 5950 */;
import ScreenStackDefault from "ScreenStack" /* 5952 */;
import _modDef5956 from "module_5956" /* 5956 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5959 */;
import ScreenFooterDefault from "ScreenFooter" /* 5963 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5965 */;
import _modDef5967 from "module_5967" /* 5967 */;
import RNSModule from "RNSModule" /* 5918 */;

const require = globalThis.__r;
const _modDef5934 = _mod5934;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5933.enableScreens;
export const enableFreeze = _mod5933.enableFreeze;
export const screensEnabled = _mod5933.screensEnabled;
export const freezeEnabled = _mod5933.freezeEnabled;
export const Screen = _modDef5934;
export const InnerScreen = _mod5934.InnerScreen;
export const ScreenContext = _mod5934.ScreenContext;
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
export const ScreenStackItem = _modDef5956;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5941.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5941.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5967;