// === Module 5914: enableScreens ===

// Module 5914 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5921 */;
import _mod5930 from "module_5930" /* 5930 */;
import _mod5931 from "module_5931" /* 5931 */;
import _mod5938 from "module_5938" /* 5938 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5940 */;
import SearchBarDefault from "SearchBar" /* 5945 */;
import ScreenContainerDefault from "ScreenContainer" /* 5947 */;
import ScreenStackDefault from "ScreenStack" /* 5949 */;
import _modDef5953 from "module_5953" /* 5953 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5956 */;
import ScreenFooterDefault from "ScreenFooter" /* 5960 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5962 */;
import _modDef5964 from "module_5964" /* 5964 */;
import RNSModule from "RNSModule" /* 5915 */;

const require = globalThis.__r;
const _modDef5931 = _mod5931;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5930.enableScreens;
export const enableFreeze = _mod5930.enableFreeze;
export const screensEnabled = _mod5930.screensEnabled;
export const freezeEnabled = _mod5930.freezeEnabled;
export const Screen = _modDef5931;
export const InnerScreen = _mod5931.InnerScreen;
export const ScreenContext = _mod5931.ScreenContext;
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
export const ScreenStackItem = _modDef5953;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5938.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5938.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5964;