// === Module 5903: enableScreens ===

// Module 5903 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5910 */;
import _mod5919 from "module_5919" /* 5919 */;
import _mod5920 from "module_5920" /* 5920 */;
import _mod5927 from "module_5927" /* 5927 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5929 */;
import SearchBarDefault from "SearchBar" /* 5934 */;
import ScreenContainerDefault from "ScreenContainer" /* 5936 */;
import ScreenStackDefault from "ScreenStack" /* 5938 */;
import _modDef5942 from "module_5942" /* 5942 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5945 */;
import ScreenFooterDefault from "ScreenFooter" /* 5949 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5951 */;
import _modDef5953 from "module_5953" /* 5953 */;
import RNSModule from "RNSModule" /* 5904 */;

const require = globalThis.__r;
const _modDef5920 = _mod5920;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5919.enableScreens;
export const enableFreeze = _mod5919.enableFreeze;
export const screensEnabled = _mod5919.screensEnabled;
export const freezeEnabled = _mod5919.freezeEnabled;
export const Screen = _modDef5920;
export const InnerScreen = _mod5920.InnerScreen;
export const ScreenContext = _mod5920.ScreenContext;
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
export const ScreenStackItem = _modDef5942;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5927.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5927.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5953;