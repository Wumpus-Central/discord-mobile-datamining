// _runtime/05871_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05878_get_synchronousScreenUpdatesEnabled.js";
import _mod5887 from "metro/05887__.js";
import _mod5888 from "metro/05888__.js";
import _mod5895 from "metro/05895__.js";
import ScreenStackHeaderSubview from "05897_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05902_SearchBar.js";
import ScreenContainerDefault from "05904_ScreenContainer.js";
import ScreenStackDefault from "05906_ScreenStack.js";
import _modDef5910 from "metro/05910__.js";
import ScreenContentWrapperDefault from "05913_ScreenContentWrapper.js";
import ScreenFooterDefault from "05917_ScreenFooter.js";
import FullWindowOverlayDefault from "05919_FullWindowOverlay.js";
import _modDef5921 from "metro/05921__.js";
import RNSModule from "05872_RNSModule.js";

const require = globalThis.__r;
const _modDef5888 = _mod5888;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5887.enableScreens;
export const enableFreeze = _mod5887.enableFreeze;
export const screensEnabled = _mod5887.screensEnabled;
export const freezeEnabled = _mod5887.freezeEnabled;
export const Screen = _modDef5888;
export const InnerScreen = _mod5888.InnerScreen;
export const ScreenContext = _mod5888.ScreenContext;
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
export const ScreenStackItem = _modDef5910;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5895.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5895.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5921;
