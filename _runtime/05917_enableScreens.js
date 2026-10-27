// _runtime/05917_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05924_get_synchronousScreenUpdatesEnabled.js";
import _mod5933 from "metro/05933__.js";
import _mod5934 from "metro/05934__.js";
import _mod5941 from "metro/05941__.js";
import ScreenStackHeaderSubview from "05943_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05948_SearchBar.js";
import ScreenContainerDefault from "05950_ScreenContainer.js";
import ScreenStackDefault from "05952_ScreenStack.js";
import _modDef5956 from "metro/05956__.js";
import ScreenContentWrapperDefault from "05959_ScreenContentWrapper.js";
import ScreenFooterDefault from "05963_ScreenFooter.js";
import FullWindowOverlayDefault from "05965_FullWindowOverlay.js";
import _modDef5967 from "metro/05967__.js";
import RNSModule from "05918_RNSModule.js";

const require = globalThis.__r;
const _modDef5934 = _mod5934;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5933.enableScreens;
export const enableFreeze = _mod5933.enableFreeze;
export const screensEnabled = _mod5933.screensEnabled;
export const freezeEnabled = _mod5933.freezeEnabled;
export const Screen = _modDef5934;
export const InnerScreen = _mod5934.InnerScreen;
export const ScreenContext = _mod5934.ScreenContext;
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
export const ScreenStackItem = _modDef5956;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5941.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5941.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5967;
