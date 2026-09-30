// === Module 5407: enableScreens ===

// Module 5407 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5414 */;
import _mod5423 from "module_5423" /* 5423 */;
import _mod5424 from "module_5424" /* 5424 */;
import _mod5431 from "module_5431" /* 5431 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5433 */;
import SearchBarDefault from "SearchBar" /* 5438 */;
import ScreenContainerDefault from "ScreenContainer" /* 5440 */;
import ScreenStackDefault from "ScreenStack" /* 5442 */;
import _modDef5446 from "module_5446" /* 5446 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5449 */;
import ScreenFooterDefault from "ScreenFooter" /* 5453 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5455 */;
import _modDef5457 from "module_5457" /* 5457 */;
import RNSModule from "RNSModule" /* 5408 */;

const require = globalThis.__r;
const _modDef5424 = _mod5424;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5423.enableScreens;
export const enableFreeze = _mod5423.enableFreeze;
export const screensEnabled = _mod5423.screensEnabled;
export const freezeEnabled = _mod5423.freezeEnabled;
export const Screen = _modDef5424;
export const InnerScreen = _mod5424.InnerScreen;
export const ScreenContext = _mod5424.ScreenContext;
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
export const ScreenStackItem = _modDef5446;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5431.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5431.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5457;