// === Module 4988: enableScreens ===

// Module 4988 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4995 */;
import _mod5004 from "module_5004" /* 5004 */;
import _mod5005 from "module_5005" /* 5005 */;
import _mod5012 from "module_5012" /* 5012 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5014 */;
import SearchBarDefault from "SearchBar" /* 5019 */;
import ScreenContainerDefault from "ScreenContainer" /* 5021 */;
import ScreenStackDefault from "ScreenStack" /* 5023 */;
import _modDef5027 from "module_5027" /* 5027 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5030 */;
import ScreenFooterDefault from "ScreenFooter" /* 5034 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5036 */;
import _modDef5038 from "module_5038" /* 5038 */;
import RNSModule from "RNSModule" /* 4989 */;

const _modDef5005 = _mod5005;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5004.enableScreens;
export const enableFreeze = _mod5004.enableFreeze;
export const screensEnabled = _mod5004.screensEnabled;
export const freezeEnabled = _mod5004.freezeEnabled;
export const Screen = _modDef5005;
export const InnerScreen = _mod5005.InnerScreen;
export const ScreenContext = _mod5005.ScreenContext;
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
export const ScreenStackItem = _modDef5027;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5012.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5012.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5038;