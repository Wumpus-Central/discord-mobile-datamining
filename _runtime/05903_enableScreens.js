// _runtime/05903_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05910_get_synchronousScreenUpdatesEnabled.js";
import _mod5919 from "metro/05919__.js";
import _mod5920 from "metro/05920__.js";
import _mod5927 from "metro/05927__.js";
import ScreenStackHeaderSubview from "05929_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05934_SearchBar.js";
import ScreenContainerDefault from "05936_ScreenContainer.js";
import ScreenStackDefault from "05938_ScreenStack.js";
import _modDef5942 from "metro/05942__.js";
import ScreenContentWrapperDefault from "05945_ScreenContentWrapper.js";
import ScreenFooterDefault from "05949_ScreenFooter.js";
import FullWindowOverlayDefault from "05951_FullWindowOverlay.js";
import _modDef5953 from "metro/05953__.js";
import RNSModule from "05904_RNSModule.js";

const require = globalThis.__r;
const _modDef5920 = _mod5920;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5919.enableScreens;
export const enableFreeze = _mod5919.enableFreeze;
export const screensEnabled = _mod5919.screensEnabled;
export const freezeEnabled = _mod5919.freezeEnabled;
export const Screen = _modDef5920;
export const InnerScreen = _mod5920.InnerScreen;
export const ScreenContext = _mod5920.ScreenContext;
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
export const ScreenStackItem = _modDef5942;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5927.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5927.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5953;
