// _runtime/05203_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05210_get_synchronousScreenUpdatesEnabled.js";
import _mod5219 from "metro/05219__.js";
import _mod5220 from "metro/05220__.js";
import _mod5227 from "metro/05227__.js";
import ScreenStackHeaderSubview from "05229_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05234_SearchBar.js";
import ScreenContainerDefault from "05236_ScreenContainer.js";
import ScreenStackDefault from "05238_ScreenStack.js";
import _modDef5242 from "metro/05242__.js";
import ScreenContentWrapperDefault from "05245_ScreenContentWrapper.js";
import ScreenFooterDefault from "05249_ScreenFooter.js";
import FullWindowOverlayDefault from "05251_FullWindowOverlay.js";
import _modDef5253 from "metro/05253__.js";
import RNSModule from "05204_RNSModule.js";

const require = globalThis.__r;
const _modDef5220 = _mod5220;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5219.enableScreens;
export const enableFreeze = _mod5219.enableFreeze;
export const screensEnabled = _mod5219.screensEnabled;
export const freezeEnabled = _mod5219.freezeEnabled;
export const Screen = _modDef5220;
export const InnerScreen = _mod5220.InnerScreen;
export const ScreenContext = _mod5220.ScreenContext;
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
export const ScreenStackItem = _modDef5242;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5227.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5227.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5253;
