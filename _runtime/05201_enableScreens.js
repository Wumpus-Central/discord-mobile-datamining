// _runtime/05201_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05208_get_synchronousScreenUpdatesEnabled.js";
import _mod5217 from "metro/05217__.js";
import _mod5218 from "metro/05218__.js";
import _mod5225 from "metro/05225__.js";
import ScreenStackHeaderSubview from "05227_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05232_SearchBar.js";
import ScreenContainerDefault from "05234_ScreenContainer.js";
import ScreenStackDefault from "05236_ScreenStack.js";
import _modDef5240 from "metro/05240__.js";
import ScreenContentWrapperDefault from "05243_ScreenContentWrapper.js";
import ScreenFooterDefault from "05247_ScreenFooter.js";
import FullWindowOverlayDefault from "05249_FullWindowOverlay.js";
import _modDef5251 from "metro/05251__.js";
import RNSModule from "05202_RNSModule.js";

const require = globalThis.__r;
const _modDef5218 = _mod5218;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5217.enableScreens;
export const enableFreeze = _mod5217.enableFreeze;
export const screensEnabled = _mod5217.screensEnabled;
export const freezeEnabled = _mod5217.freezeEnabled;
export const Screen = _modDef5218;
export const InnerScreen = _mod5218.InnerScreen;
export const ScreenContext = _mod5218.ScreenContext;
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
export const ScreenStackItem = _modDef5240;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5225.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5225.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5251;
