// === Module 6124: enableScreens ===

// Module 6124 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6131 */;
import _mod6140 from "module_6140" /* 6140 */;
import _mod6141 from "module_6141" /* 6141 */;
import _mod6148 from "module_6148" /* 6148 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6150 */;
import SearchBarDefault from "SearchBar" /* 6155 */;
import ScreenContainerDefault from "ScreenContainer" /* 6157 */;
import ScreenStackDefault from "ScreenStack" /* 6159 */;
import _modDef6163 from "module_6163" /* 6163 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6166 */;
import ScreenFooterDefault from "ScreenFooter" /* 6170 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6172 */;
import _modDef6174 from "module_6174" /* 6174 */;
import RNSModule from "RNSModule" /* 6125 */;

const require = globalThis.__r;
const _modDef6141 = _mod6141;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6140.enableScreens;
export const enableFreeze = _mod6140.enableFreeze;
export const screensEnabled = _mod6140.screensEnabled;
export const freezeEnabled = _mod6140.freezeEnabled;
export const Screen = _modDef6141;
export const InnerScreen = _mod6141.InnerScreen;
export const ScreenContext = _mod6141.ScreenContext;
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
export const ScreenStackItem = _modDef6163;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6148.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6148.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6174;