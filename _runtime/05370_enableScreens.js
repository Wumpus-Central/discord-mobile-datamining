// _runtime/05370_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05377_get_synchronousScreenUpdatesEnabled.js";
import _mod5386 from "metro/05386__.js";
import _mod5387 from "metro/05387__.js";
import _mod5394 from "metro/05394__.js";
import ScreenStackHeaderSubview from "05396_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05401_SearchBar.js";
import ScreenContainerDefault from "05403_ScreenContainer.js";
import ScreenStackDefault from "05405_ScreenStack.js";
import _modDef5409 from "metro/05409__.js";
import ScreenContentWrapperDefault from "05412_ScreenContentWrapper.js";
import ScreenFooterDefault from "05416_ScreenFooter.js";
import FullWindowOverlayDefault from "05418_FullWindowOverlay.js";
import _modDef5420 from "metro/05420__.js";
import RNSModule from "05371_RNSModule.js";

const require = globalThis.__r;
const _modDef5387 = _mod5387;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5386.enableScreens;
export const enableFreeze = _mod5386.enableFreeze;
export const screensEnabled = _mod5386.screensEnabled;
export const freezeEnabled = _mod5386.freezeEnabled;
export const Screen = _modDef5387;
export const InnerScreen = _mod5387.InnerScreen;
export const ScreenContext = _mod5387.ScreenContext;
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
export const ScreenStackItem = _modDef5409;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5394.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5394.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5420;
