// === Module 5776: enableScreens ===

// Module 5776 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5783 */;
import _mod5792 from "module_5792" /* 5792 */;
import _mod5793 from "module_5793" /* 5793 */;
import _mod5800 from "module_5800" /* 5800 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5802 */;
import SearchBarDefault from "SearchBar" /* 5807 */;
import ScreenContainerDefault from "ScreenContainer" /* 5809 */;
import ScreenStackDefault from "ScreenStack" /* 5811 */;
import _modDef5815 from "module_5815" /* 5815 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5818 */;
import ScreenFooterDefault from "ScreenFooter" /* 5822 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5824 */;
import _modDef5826 from "module_5826" /* 5826 */;
import RNSModule from "RNSModule" /* 5777 */;

const require = globalThis.__r;
const _modDef5793 = _mod5793;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5792.enableScreens;
export const enableFreeze = _mod5792.enableFreeze;
export const screensEnabled = _mod5792.screensEnabled;
export const freezeEnabled = _mod5792.freezeEnabled;
export const Screen = _modDef5793;
export const InnerScreen = _mod5793.InnerScreen;
export const ScreenContext = _mod5793.ScreenContext;
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
export const ScreenStackItem = _modDef5815;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5800.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5800.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5826;