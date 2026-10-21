// _runtime/05896_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05903_get_synchronousScreenUpdatesEnabled.js";
import _mod5912 from "metro/05912__.js";
import _mod5913 from "metro/05913__.js";
import _mod5920 from "metro/05920__.js";
import ScreenStackHeaderSubview from "05922_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05927_SearchBar.js";
import ScreenContainerDefault from "05929_ScreenContainer.js";
import ScreenStackDefault from "05931_ScreenStack.js";
import _modDef5935 from "metro/05935__.js";
import ScreenContentWrapperDefault from "05938_ScreenContentWrapper.js";
import ScreenFooterDefault from "05942_ScreenFooter.js";
import FullWindowOverlayDefault from "05944_FullWindowOverlay.js";
import _modDef5946 from "metro/05946__.js";
import RNSModule from "05897_RNSModule.js";

const require = globalThis.__r;
const _modDef5913 = _mod5913;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5912.enableScreens;
export const enableFreeze = _mod5912.enableFreeze;
export const screensEnabled = _mod5912.screensEnabled;
export const freezeEnabled = _mod5912.freezeEnabled;
export const Screen = _modDef5913;
export const InnerScreen = _mod5913.InnerScreen;
export const ScreenContext = _mod5913.ScreenContext;
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
export const ScreenStackItem = _modDef5935;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5920.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5920.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5946;
