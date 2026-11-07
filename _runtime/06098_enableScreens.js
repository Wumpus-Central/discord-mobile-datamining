// _runtime/06098_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06105_get_synchronousScreenUpdatesEnabled.js";
import _mod6114 from "metro/06114__.js";
import _mod6115 from "metro/06115__.js";
import _mod6122 from "metro/06122__.js";
import ScreenStackHeaderSubview from "06124_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06129_SearchBar.js";
import ScreenContainerDefault from "06131_ScreenContainer.js";
import ScreenStackDefault from "06133_ScreenStack.js";
import _modDef6137 from "metro/06137__.js";
import ScreenContentWrapperDefault from "06140_ScreenContentWrapper.js";
import ScreenFooterDefault from "06144_ScreenFooter.js";
import FullWindowOverlayDefault from "06146_FullWindowOverlay.js";
import _modDef6148 from "metro/06148__.js";
import RNSModule from "06099_RNSModule.js";

const require = globalThis.__r;
const _modDef6115 = _mod6115;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6114.enableScreens;
export const enableFreeze = _mod6114.enableFreeze;
export const screensEnabled = _mod6114.screensEnabled;
export const freezeEnabled = _mod6114.freezeEnabled;
export const Screen = _modDef6115;
export const InnerScreen = _mod6115.InnerScreen;
export const ScreenContext = _mod6115.ScreenContext;
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
export const ScreenStackItem = _modDef6137;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6122.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6122.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6148;
