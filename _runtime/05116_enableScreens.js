// === Module 5116: enableScreens ===

// Module 5116 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5123 */;
import _mod5132 from "module_5132" /* 5132 */;
import _mod5133 from "module_5133" /* 5133 */;
import _mod5140 from "module_5140" /* 5140 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5142 */;
import SearchBarDefault from "SearchBar" /* 5147 */;
import ScreenContainerDefault from "ScreenContainer" /* 5149 */;
import ScreenStackDefault from "ScreenStack" /* 5151 */;
import _modDef5155 from "module_5155" /* 5155 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5158 */;
import ScreenFooterDefault from "ScreenFooter" /* 5162 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5164 */;
import _modDef5166 from "module_5166" /* 5166 */;
import RNSModule from "RNSModule" /* 5117 */;

const require = globalThis.__r;
const _modDef5133 = _mod5133;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5132.enableScreens;
export const enableFreeze = _mod5132.enableFreeze;
export const screensEnabled = _mod5132.screensEnabled;
export const freezeEnabled = _mod5132.freezeEnabled;
export const Screen = _modDef5133;
export const InnerScreen = _mod5133.InnerScreen;
export const ScreenContext = _mod5133.ScreenContext;
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
export const ScreenStackItem = _modDef5155;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5140.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5140.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5166;