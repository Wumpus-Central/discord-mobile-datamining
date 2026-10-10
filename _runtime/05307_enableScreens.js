// === Module 5307: enableScreens ===

// Module 5307 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5314 */;
import _mod5323 from "module_5323" /* 5323 */;
import _mod5324 from "module_5324" /* 5324 */;
import _mod5331 from "module_5331" /* 5331 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5333 */;
import SearchBarDefault from "SearchBar" /* 5338 */;
import ScreenContainerDefault from "ScreenContainer" /* 5340 */;
import ScreenStackDefault from "ScreenStack" /* 5342 */;
import _modDef5346 from "module_5346" /* 5346 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5349 */;
import ScreenFooterDefault from "ScreenFooter" /* 5353 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5355 */;
import _modDef5357 from "module_5357" /* 5357 */;
import RNSModule from "RNSModule" /* 5308 */;

const require = globalThis.__r;
const _modDef5324 = _mod5324;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5323.enableScreens;
export const enableFreeze = _mod5323.enableFreeze;
export const screensEnabled = _mod5323.screensEnabled;
export const freezeEnabled = _mod5323.freezeEnabled;
export const Screen = _modDef5324;
export const InnerScreen = _mod5324.InnerScreen;
export const ScreenContext = _mod5324.ScreenContext;
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
export const ScreenStackItem = _modDef5346;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5331.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5331.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5357;