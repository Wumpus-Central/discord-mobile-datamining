// === Module 6266: enableScreens ===

// Module 6266 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6273 */;
import _mod6282 from "module_6282" /* 6282 */;
import _mod6283 from "module_6283" /* 6283 */;
import _mod6290 from "module_6290" /* 6290 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6292 */;
import SearchBarDefault from "SearchBar" /* 6297 */;
import ScreenContainerDefault from "ScreenContainer" /* 6299 */;
import ScreenStackDefault from "ScreenStack" /* 6301 */;
import _modDef6305 from "module_6305" /* 6305 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6308 */;
import ScreenFooterDefault from "ScreenFooter" /* 6312 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6314 */;
import _modDef6316 from "module_6316" /* 6316 */;
import RNSModule from "RNSModule" /* 6267 */;

const require = globalThis.__r;
const _modDef6283 = _mod6283;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6282.enableScreens;
export const enableFreeze = _mod6282.enableFreeze;
export const screensEnabled = _mod6282.screensEnabled;
export const freezeEnabled = _mod6282.freezeEnabled;
export const Screen = _modDef6283;
export const InnerScreen = _mod6283.InnerScreen;
export const ScreenContext = _mod6283.ScreenContext;
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
export const ScreenStackItem = _modDef6305;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6290.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6290.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6316;