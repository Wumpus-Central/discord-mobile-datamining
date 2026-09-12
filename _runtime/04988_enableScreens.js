// _runtime/04988_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "04995_get_synchronousScreenUpdatesEnabled.js";
import _mod5004 from "metro/05004__.js";
import _mod5005 from "metro/05005__.js";
import _mod5012 from "metro/05012__.js";
import ScreenStackHeaderSubview from "05014_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05019_SearchBar.js";
import ScreenContainerDefault from "05021_ScreenContainer.js";
import ScreenStackDefault from "05023_ScreenStack.js";
import _modDef5027 from "metro/05027__.js";
import ScreenContentWrapperDefault from "05030_ScreenContentWrapper.js";
import ScreenFooterDefault from "05034_ScreenFooter.js";
import FullWindowOverlayDefault from "05036_FullWindowOverlay.js";
import _modDef5038 from "metro/05038__.js";
import RNSModule from "04989_RNSModule.js";

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
