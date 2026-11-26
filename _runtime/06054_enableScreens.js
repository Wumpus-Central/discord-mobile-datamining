// _runtime/06054_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06061_get_synchronousScreenUpdatesEnabled.js";
import _mod6070 from "metro/06070__.js";
import _mod6071 from "metro/06071__.js";
import _mod6078 from "metro/06078__.js";
import ScreenStackHeaderSubview from "06080_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06085_SearchBar.js";
import ScreenContainerDefault from "06087_ScreenContainer.js";
import ScreenStackDefault from "06089_ScreenStack.js";
import _modDef6093 from "metro/06093__.js";
import ScreenContentWrapperDefault from "06096_ScreenContentWrapper.js";
import ScreenFooterDefault from "06100_ScreenFooter.js";
import FullWindowOverlayDefault from "06102_FullWindowOverlay.js";
import _modDef6104 from "metro/06104__.js";
import RNSModule from "06055_RNSModule.js";

const require = globalThis.__r;
const _modDef6071 = _mod6071;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6070.enableScreens;
export const enableFreeze = _mod6070.enableFreeze;
export const screensEnabled = _mod6070.screensEnabled;
export const freezeEnabled = _mod6070.freezeEnabled;
export const Screen = _modDef6071;
export const InnerScreen = _mod6071.InnerScreen;
export const ScreenContext = _mod6071.ScreenContext;
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
export const ScreenStackItem = _modDef6093;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6078.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6078.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6104;
