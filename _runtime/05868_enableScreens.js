// _runtime/05868_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05875_get_synchronousScreenUpdatesEnabled.js";
import _mod5884 from "metro/05884__.js";
import _mod5885 from "metro/05885__.js";
import _mod5892 from "metro/05892__.js";
import ScreenStackHeaderSubview from "05894_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05899_SearchBar.js";
import ScreenContainerDefault from "05901_ScreenContainer.js";
import ScreenStackDefault from "05903_ScreenStack.js";
import _modDef5907 from "metro/05907__.js";
import ScreenContentWrapperDefault from "05910_ScreenContentWrapper.js";
import ScreenFooterDefault from "05914_ScreenFooter.js";
import FullWindowOverlayDefault from "05916_FullWindowOverlay.js";
import _modDef5918 from "metro/05918__.js";
import RNSModule from "05869_RNSModule.js";

const require = globalThis.__r;
const _modDef5885 = _mod5885;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5884.enableScreens;
export const enableFreeze = _mod5884.enableFreeze;
export const screensEnabled = _mod5884.screensEnabled;
export const freezeEnabled = _mod5884.freezeEnabled;
export const Screen = _modDef5885;
export const InnerScreen = _mod5885.InnerScreen;
export const ScreenContext = _mod5885.ScreenContext;
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
export const ScreenStackItem = _modDef5907;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5892.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5892.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5918;
