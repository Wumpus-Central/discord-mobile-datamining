// _runtime/05211_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05218_get_synchronousScreenUpdatesEnabled.js";
import _mod5227 from "metro/05227__.js";
import _mod5228 from "metro/05228__.js";
import _mod5235 from "metro/05235__.js";
import ScreenStackHeaderSubview from "05237_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05242_SearchBar.js";
import ScreenContainerDefault from "05244_ScreenContainer.js";
import ScreenStackDefault from "05246_ScreenStack.js";
import _modDef5250 from "metro/05250__.js";
import ScreenContentWrapperDefault from "05253_ScreenContentWrapper.js";
import ScreenFooterDefault from "05257_ScreenFooter.js";
import FullWindowOverlayDefault from "05259_FullWindowOverlay.js";
import _modDef5261 from "metro/05261__.js";
import RNSModule from "05212_RNSModule.js";

const require = globalThis.__r;
const _modDef5228 = _mod5228;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5227.enableScreens;
export const enableFreeze = _mod5227.enableFreeze;
export const screensEnabled = _mod5227.screensEnabled;
export const freezeEnabled = _mod5227.freezeEnabled;
export const Screen = _modDef5228;
export const InnerScreen = _mod5228.InnerScreen;
export const ScreenContext = _mod5228.ScreenContext;
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
export const ScreenStackItem = _modDef5250;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5235.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5235.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5261;
