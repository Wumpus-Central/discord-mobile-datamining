// === Module 6276: enableScreens ===

// Module 6276 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6283 */;
import _mod6292 from "module_6292" /* 6292 */;
import _mod6293 from "module_6293" /* 6293 */;
import _mod6300 from "module_6300" /* 6300 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6302 */;
import SearchBarDefault from "SearchBar" /* 6307 */;
import ScreenContainerDefault from "ScreenContainer" /* 6309 */;
import ScreenStackDefault from "ScreenStack" /* 6311 */;
import _modDef6315 from "module_6315" /* 6315 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6318 */;
import ScreenFooterDefault from "ScreenFooter" /* 6322 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6324 */;
import _modDef6326 from "module_6326" /* 6326 */;
import RNSModule from "RNSModule" /* 6277 */;

const require = globalThis.__r;
const _modDef6293 = _mod6293;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6292.enableScreens;
export const enableFreeze = _mod6292.enableFreeze;
export const screensEnabled = _mod6292.screensEnabled;
export const freezeEnabled = _mod6292.freezeEnabled;
export const Screen = _modDef6293;
export const InnerScreen = _mod6293.InnerScreen;
export const ScreenContext = _mod6293.ScreenContext;
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
export const ScreenStackItem = _modDef6315;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6300.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6300.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6326;