// _runtime/05306_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05313_get_synchronousScreenUpdatesEnabled.js";
import _mod5322 from "metro/05322__.js";
import _mod5323 from "metro/05323__.js";
import _mod5330 from "metro/05330__.js";
import ScreenStackHeaderSubview from "05332_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05337_SearchBar.js";
import ScreenContainerDefault from "05339_ScreenContainer.js";
import ScreenStackDefault from "05341_ScreenStack.js";
import _modDef5345 from "metro/05345__.js";
import ScreenContentWrapperDefault from "05348_ScreenContentWrapper.js";
import ScreenFooterDefault from "05352_ScreenFooter.js";
import FullWindowOverlayDefault from "05354_FullWindowOverlay.js";
import _modDef5356 from "metro/05356__.js";
import RNSModule from "05307_RNSModule.js";

const require = globalThis.__r;
const _modDef5323 = _mod5323;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5322.enableScreens;
export const enableFreeze = _mod5322.enableFreeze;
export const screensEnabled = _mod5322.screensEnabled;
export const freezeEnabled = _mod5322.freezeEnabled;
export const Screen = _modDef5323;
export const InnerScreen = _mod5323.InnerScreen;
export const ScreenContext = _mod5323.ScreenContext;
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
export const ScreenStackItem = _modDef5345;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5330.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5330.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5356;
