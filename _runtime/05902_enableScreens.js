// _runtime/05902_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05909_get_synchronousScreenUpdatesEnabled.js";
import _mod5918 from "metro/05918__.js";
import _mod5919 from "metro/05919__.js";
import _mod5926 from "metro/05926__.js";
import ScreenStackHeaderSubview from "05928_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05933_SearchBar.js";
import ScreenContainerDefault from "05935_ScreenContainer.js";
import ScreenStackDefault from "05937_ScreenStack.js";
import _modDef5941 from "metro/05941__.js";
import ScreenContentWrapperDefault from "05944_ScreenContentWrapper.js";
import ScreenFooterDefault from "05948_ScreenFooter.js";
import FullWindowOverlayDefault from "05950_FullWindowOverlay.js";
import _modDef5952 from "metro/05952__.js";
import RNSModule from "05903_RNSModule.js";

const require = globalThis.__r;
const _modDef5919 = _mod5919;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5918.enableScreens;
export const enableFreeze = _mod5918.enableFreeze;
export const screensEnabled = _mod5918.screensEnabled;
export const freezeEnabled = _mod5918.freezeEnabled;
export const Screen = _modDef5919;
export const InnerScreen = _mod5919.InnerScreen;
export const ScreenContext = _mod5919.ScreenContext;
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
export const ScreenStackItem = _modDef5941;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5926.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5926.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5952;
