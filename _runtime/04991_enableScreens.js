// _runtime/04991_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "04998_get_synchronousScreenUpdatesEnabled.js";
import _mod5007 from "metro/05007__.js";
import _mod5008 from "metro/05008__.js";
import _mod5015 from "metro/05015__.js";
import ScreenStackHeaderSubview from "05017_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05022_SearchBar.js";
import ScreenContainerDefault from "05024_ScreenContainer.js";
import ScreenStackDefault from "05026_ScreenStack.js";
import _modDef5030 from "metro/05030__.js";
import ScreenContentWrapperDefault from "05033_ScreenContentWrapper.js";
import ScreenFooterDefault from "05037_ScreenFooter.js";
import FullWindowOverlayDefault from "05039_FullWindowOverlay.js";
import _modDef5041 from "metro/05041__.js";
import RNSModule from "04992_RNSModule.js";

const require = globalThis.__r;
const _modDef5008 = _mod5008;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5007.enableScreens;
export const enableFreeze = _mod5007.enableFreeze;
export const screensEnabled = _mod5007.screensEnabled;
export const freezeEnabled = _mod5007.freezeEnabled;
export const Screen = _modDef5008;
export const InnerScreen = _mod5008.InnerScreen;
export const ScreenContext = _mod5008.ScreenContext;
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
export const ScreenStackItem = _modDef5030;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5015.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5015.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5041;
