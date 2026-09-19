// _runtime/05116_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05123_get_synchronousScreenUpdatesEnabled.js";
import _mod5132 from "metro/05132__.js";
import _mod5133 from "metro/05133__.js";
import _mod5140 from "metro/05140__.js";
import ScreenStackHeaderSubview from "05142_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05147_SearchBar.js";
import ScreenContainerDefault from "05149_ScreenContainer.js";
import ScreenStackDefault from "05151_ScreenStack.js";
import _modDef5155 from "metro/05155__.js";
import ScreenContentWrapperDefault from "05158_ScreenContentWrapper.js";
import ScreenFooterDefault from "05162_ScreenFooter.js";
import FullWindowOverlayDefault from "05164_FullWindowOverlay.js";
import _modDef5166 from "metro/05166__.js";
import RNSModule from "05117_RNSModule.js";

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
