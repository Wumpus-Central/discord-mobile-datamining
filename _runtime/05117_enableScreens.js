// === Module 5117: enableScreens ===

// Module 5117 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5124 */;
import _mod5133 from "module_5133" /* 5133 */;
import _mod5134 from "module_5134" /* 5134 */;
import _mod5141 from "module_5141" /* 5141 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5143 */;
import SearchBarDefault from "SearchBar" /* 5148 */;
import ScreenContainerDefault from "ScreenContainer" /* 5150 */;
import ScreenStackDefault from "ScreenStack" /* 5152 */;
import _modDef5156 from "module_5156" /* 5156 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5159 */;
import ScreenFooterDefault from "ScreenFooter" /* 5163 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5165 */;
import _modDef5167 from "module_5167" /* 5167 */;
import RNSModule from "RNSModule" /* 5118 */;

const require = globalThis.__r;
const _modDef5134 = _mod5134;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5133.enableScreens;
export const enableFreeze = _mod5133.enableFreeze;
export const screensEnabled = _mod5133.screensEnabled;
export const freezeEnabled = _mod5133.freezeEnabled;
export const Screen = _modDef5134;
export const InnerScreen = _mod5134.InnerScreen;
export const ScreenContext = _mod5134.ScreenContext;
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
export const ScreenStackItem = _modDef5156;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5141.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5141.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5167;