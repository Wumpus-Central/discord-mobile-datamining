// _runtime/05117_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05124_get_synchronousScreenUpdatesEnabled.js";
import _mod5133 from "metro/05133__.js";
import _mod5134 from "metro/05134__.js";
import _mod5141 from "metro/05141__.js";
import ScreenStackHeaderSubview from "05143_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05148_SearchBar.js";
import ScreenContainerDefault from "05150_ScreenContainer.js";
import ScreenStackDefault from "05152_ScreenStack.js";
import _modDef5156 from "metro/05156__.js";
import ScreenContentWrapperDefault from "05159_ScreenContentWrapper.js";
import ScreenFooterDefault from "05163_ScreenFooter.js";
import FullWindowOverlayDefault from "05165_FullWindowOverlay.js";
import _modDef5167 from "metro/05167__.js";
import RNSModule from "05118_RNSModule.js";

const require = globalThis.__r;
const _modDef5134 = _mod5134;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5133.enableScreens;
export const enableFreeze = _mod5133.enableFreeze;
export const screensEnabled = _mod5133.screensEnabled;
export const freezeEnabled = _mod5133.freezeEnabled;
export const Screen = _modDef5134;
export const InnerScreen = _mod5134.InnerScreen;
export const ScreenContext = _mod5134.ScreenContext;
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
export const ScreenStackItem = _modDef5156;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5141.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5141.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5167;
