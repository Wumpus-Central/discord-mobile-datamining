// === Module 5916: enableScreens ===

// Module 5916 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5923 */;
import _mod5932 from "module_5932" /* 5932 */;
import _mod5933 from "module_5933" /* 5933 */;
import _mod5940 from "module_5940" /* 5940 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5942 */;
import SearchBarDefault from "SearchBar" /* 5947 */;
import ScreenContainerDefault from "ScreenContainer" /* 5949 */;
import ScreenStackDefault from "ScreenStack" /* 5951 */;
import _modDef5955 from "module_5955" /* 5955 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5958 */;
import ScreenFooterDefault from "ScreenFooter" /* 5962 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5964 */;
import _modDef5966 from "module_5966" /* 5966 */;
import RNSModule from "RNSModule" /* 5917 */;

const require = globalThis.__r;
const _modDef5933 = _mod5933;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5932.enableScreens;
export const enableFreeze = _mod5932.enableFreeze;
export const screensEnabled = _mod5932.screensEnabled;
export const freezeEnabled = _mod5932.freezeEnabled;
export const Screen = _modDef5933;
export const InnerScreen = _mod5933.InnerScreen;
export const ScreenContext = _mod5933.ScreenContext;
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
export const ScreenStackItem = _modDef5955;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5940.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5940.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5966;