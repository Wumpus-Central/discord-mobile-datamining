// === Module 5377: enableScreens ===

// Module 5377 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5384 */;
import _mod5393 from "module_5393" /* 5393 */;
import _mod5394 from "module_5394" /* 5394 */;
import _mod5401 from "module_5401" /* 5401 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5403 */;
import SearchBarDefault from "SearchBar" /* 5408 */;
import ScreenContainerDefault from "ScreenContainer" /* 5410 */;
import ScreenStackDefault from "ScreenStack" /* 5412 */;
import _modDef5416 from "module_5416" /* 5416 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5419 */;
import ScreenFooterDefault from "ScreenFooter" /* 5423 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5425 */;
import _modDef5427 from "module_5427" /* 5427 */;
import RNSModule from "RNSModule" /* 5378 */;

const require = globalThis.__r;
const _modDef5394 = _mod5394;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5393.enableScreens;
export const enableFreeze = _mod5393.enableFreeze;
export const screensEnabled = _mod5393.screensEnabled;
export const freezeEnabled = _mod5393.freezeEnabled;
export const Screen = _modDef5394;
export const InnerScreen = _mod5394.InnerScreen;
export const ScreenContext = _mod5394.ScreenContext;
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
export const ScreenStackItem = _modDef5416;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5401.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5401.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5427;