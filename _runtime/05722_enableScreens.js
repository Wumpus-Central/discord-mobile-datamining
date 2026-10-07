// _runtime/05722_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05729_get_synchronousScreenUpdatesEnabled.js";
import _mod5738 from "metro/05738__.js";
import _mod5739 from "metro/05739__.js";
import _mod5746 from "metro/05746__.js";
import ScreenStackHeaderSubview from "05748_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05753_SearchBar.js";
import ScreenContainerDefault from "05755_ScreenContainer.js";
import ScreenStackDefault from "05757_ScreenStack.js";
import _modDef5761 from "metro/05761__.js";
import ScreenContentWrapperDefault from "05764_ScreenContentWrapper.js";
import ScreenFooterDefault from "05768_ScreenFooter.js";
import FullWindowOverlayDefault from "05770_FullWindowOverlay.js";
import _modDef5772 from "metro/05772__.js";
import RNSModule from "05723_RNSModule.js";

const require = globalThis.__r;
const _modDef5739 = _mod5739;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5738.enableScreens;
export const enableFreeze = _mod5738.enableFreeze;
export const screensEnabled = _mod5738.screensEnabled;
export const freezeEnabled = _mod5738.freezeEnabled;
export const Screen = _modDef5739;
export const InnerScreen = _mod5739.InnerScreen;
export const ScreenContext = _mod5739.ScreenContext;
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
export const ScreenStackItem = _modDef5761;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5746.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5746.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5772;
