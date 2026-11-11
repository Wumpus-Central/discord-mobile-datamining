// _runtime/06213_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06220_get_synchronousScreenUpdatesEnabled.js";
import _mod6229 from "metro/06229__.js";
import _mod6230 from "metro/06230__.js";
import _mod6237 from "metro/06237__.js";
import ScreenStackHeaderSubview from "06239_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06244_SearchBar.js";
import ScreenContainerDefault from "06246_ScreenContainer.js";
import ScreenStackDefault from "06248_ScreenStack.js";
import _modDef6252 from "metro/06252__.js";
import ScreenContentWrapperDefault from "06255_ScreenContentWrapper.js";
import ScreenFooterDefault from "06259_ScreenFooter.js";
import FullWindowOverlayDefault from "06261_FullWindowOverlay.js";
import _modDef6263 from "metro/06263__.js";
import RNSModule from "06214_RNSModule.js";

const require = globalThis.__r;
const _modDef6230 = _mod6230;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6229.enableScreens;
export const enableFreeze = _mod6229.enableFreeze;
export const screensEnabled = _mod6229.screensEnabled;
export const freezeEnabled = _mod6229.freezeEnabled;
export const Screen = _modDef6230;
export const InnerScreen = _mod6230.InnerScreen;
export const ScreenContext = _mod6230.ScreenContext;
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
export const ScreenStackItem = _modDef6252;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6237.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6237.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6263;
