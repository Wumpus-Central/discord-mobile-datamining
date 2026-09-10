// === Module 4957: enableScreens ===

// Module 4957 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4964 */;
import _mod4973 from "module_4973" /* 4973 */;
import _mod4974 from "module_4974" /* 4974 */;
import _mod4981 from "module_4981" /* 4981 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4983 */;
import SearchBarDefault from "SearchBar" /* 4988 */;
import ScreenContainerDefault from "ScreenContainer" /* 4990 */;
import ScreenStackDefault from "ScreenStack" /* 4992 */;
import _modDef4996 from "module_4996" /* 4996 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4999 */;
import ScreenFooterDefault from "ScreenFooter" /* 5003 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5005 */;
import _modDef5007 from "module_5007" /* 5007 */;
import RNSModule from "RNSModule" /* 4958 */;

const _modDef4974 = _mod4974;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod4973.enableScreens;
export const enableFreeze = _mod4973.enableFreeze;
export const screensEnabled = _mod4973.screensEnabled;
export const freezeEnabled = _mod4973.freezeEnabled;
export const Screen = _modDef4974;
export const InnerScreen = _mod4974.InnerScreen;
export const ScreenContext = _mod4974.ScreenContext;
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
export const ScreenStackItem = _modDef4996;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4981.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4981.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5007;