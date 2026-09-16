// _runtime/04990_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "04997_get_synchronousScreenUpdatesEnabled.js";
import _mod5006 from "metro/05006__.js";
import _mod5007 from "metro/05007__.js";
import _mod5014 from "metro/05014__.js";
import ScreenStackHeaderSubview from "05016_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05021_SearchBar.js";
import ScreenContainerDefault from "05023_ScreenContainer.js";
import ScreenStackDefault from "05025_ScreenStack.js";
import _modDef5029 from "metro/05029__.js";
import ScreenContentWrapperDefault from "05032_ScreenContentWrapper.js";
import ScreenFooterDefault from "05036_ScreenFooter.js";
import FullWindowOverlayDefault from "05038_FullWindowOverlay.js";
import _modDef5040 from "metro/05040__.js";
import RNSModule from "04991_RNSModule.js";

const require = globalThis.__r;
const _modDef5007 = _mod5007;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5006.enableScreens;
export const enableFreeze = _mod5006.enableFreeze;
export const screensEnabled = _mod5006.screensEnabled;
export const freezeEnabled = _mod5006.freezeEnabled;
export const Screen = _modDef5007;
export const InnerScreen = _mod5007.InnerScreen;
export const ScreenContext = _mod5007.ScreenContext;
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
export const ScreenStackItem = _modDef5029;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5014.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5014.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5040;
