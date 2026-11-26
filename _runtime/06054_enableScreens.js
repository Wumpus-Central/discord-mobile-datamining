// === Module 6054: enableScreens ===

// Module 6054 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6061 */;
import _mod6070 from "module_6070" /* 6070 */;
import _mod6071 from "module_6071" /* 6071 */;
import _mod6078 from "module_6078" /* 6078 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6080 */;
import SearchBarDefault from "SearchBar" /* 6085 */;
import ScreenContainerDefault from "ScreenContainer" /* 6087 */;
import ScreenStackDefault from "ScreenStack" /* 6089 */;
import _modDef6093 from "module_6093" /* 6093 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6096 */;
import ScreenFooterDefault from "ScreenFooter" /* 6100 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6102 */;
import _modDef6104 from "module_6104" /* 6104 */;
import RNSModule from "RNSModule" /* 6055 */;

const require = globalThis.__r;
const _modDef6071 = _mod6071;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6070.enableScreens;
export const enableFreeze = _mod6070.enableFreeze;
export const screensEnabled = _mod6070.screensEnabled;
export const freezeEnabled = _mod6070.freezeEnabled;
export const Screen = _modDef6071;
export const InnerScreen = _mod6071.InnerScreen;
export const ScreenContext = _mod6071.ScreenContext;
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
export const ScreenStackItem = _modDef6093;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6078.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6078.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6104;