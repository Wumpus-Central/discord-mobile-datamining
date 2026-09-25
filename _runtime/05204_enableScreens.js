// _runtime/05204_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05211_get_synchronousScreenUpdatesEnabled.js";
import _mod5220 from "metro/05220__.js";
import _mod5221 from "metro/05221__.js";
import _mod5228 from "metro/05228__.js";
import ScreenStackHeaderSubview from "05230_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05235_SearchBar.js";
import ScreenContainerDefault from "05237_ScreenContainer.js";
import ScreenStackDefault from "05239_ScreenStack.js";
import _modDef5243 from "metro/05243__.js";
import ScreenContentWrapperDefault from "05246_ScreenContentWrapper.js";
import ScreenFooterDefault from "05250_ScreenFooter.js";
import FullWindowOverlayDefault from "05252_FullWindowOverlay.js";
import _modDef5254 from "metro/05254__.js";
import RNSModule from "05205_RNSModule.js";

const require = globalThis.__r;
const _modDef5221 = _mod5221;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5220.enableScreens;
export const enableFreeze = _mod5220.enableFreeze;
export const screensEnabled = _mod5220.screensEnabled;
export const freezeEnabled = _mod5220.freezeEnabled;
export const Screen = _modDef5221;
export const InnerScreen = _mod5221.InnerScreen;
export const ScreenContext = _mod5221.ScreenContext;
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
export const ScreenStackItem = _modDef5243;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5228.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5228.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5254;
