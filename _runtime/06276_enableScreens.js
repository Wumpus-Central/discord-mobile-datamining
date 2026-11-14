// _runtime/06276_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06283_get_synchronousScreenUpdatesEnabled.js";
import _mod6292 from "metro/06292__.js";
import _mod6293 from "metro/06293__.js";
import _mod6300 from "metro/06300__.js";
import ScreenStackHeaderSubview from "06302_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06307_SearchBar.js";
import ScreenContainerDefault from "06309_ScreenContainer.js";
import ScreenStackDefault from "06311_ScreenStack.js";
import _modDef6315 from "metro/06315__.js";
import ScreenContentWrapperDefault from "06318_ScreenContentWrapper.js";
import ScreenFooterDefault from "06322_ScreenFooter.js";
import FullWindowOverlayDefault from "06324_FullWindowOverlay.js";
import _modDef6326 from "metro/06326__.js";
import RNSModule from "06277_RNSModule.js";

const require = globalThis.__r;
const _modDef6293 = _mod6293;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6292.enableScreens;
export const enableFreeze = _mod6292.enableFreeze;
export const screensEnabled = _mod6292.screensEnabled;
export const freezeEnabled = _mod6292.freezeEnabled;
export const Screen = _modDef6293;
export const InnerScreen = _mod6293.InnerScreen;
export const ScreenContext = _mod6293.ScreenContext;
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
export const ScreenStackItem = _modDef6315;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6300.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6300.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6326;
