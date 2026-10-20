// _runtime/05874_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05881_get_synchronousScreenUpdatesEnabled.js";
import _mod5890 from "metro/05890__.js";
import _mod5891 from "metro/05891__.js";
import _mod5898 from "metro/05898__.js";
import ScreenStackHeaderSubview from "05900_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05905_SearchBar.js";
import ScreenContainerDefault from "05907_ScreenContainer.js";
import ScreenStackDefault from "05909_ScreenStack.js";
import _modDef5913 from "metro/05913__.js";
import ScreenContentWrapperDefault from "05916_ScreenContentWrapper.js";
import ScreenFooterDefault from "05920_ScreenFooter.js";
import FullWindowOverlayDefault from "05922_FullWindowOverlay.js";
import _modDef5924 from "metro/05924__.js";
import RNSModule from "05875_RNSModule.js";

const require = globalThis.__r;
const _modDef5891 = _mod5891;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5890.enableScreens;
export const enableFreeze = _mod5890.enableFreeze;
export const screensEnabled = _mod5890.screensEnabled;
export const freezeEnabled = _mod5890.freezeEnabled;
export const Screen = _modDef5891;
export const InnerScreen = _mod5891.InnerScreen;
export const ScreenContext = _mod5891.ScreenContext;
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
export const ScreenStackItem = _modDef5913;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5898.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5898.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5924;
