// _runtime/06104_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06111_get_synchronousScreenUpdatesEnabled.js";
import _mod6120 from "metro/06120__.js";
import _mod6121 from "metro/06121__.js";
import _mod6128 from "metro/06128__.js";
import ScreenStackHeaderSubview from "06130_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06135_SearchBar.js";
import ScreenContainerDefault from "06137_ScreenContainer.js";
import ScreenStackDefault from "06139_ScreenStack.js";
import _modDef6143 from "metro/06143__.js";
import ScreenContentWrapperDefault from "06146_ScreenContentWrapper.js";
import ScreenFooterDefault from "06150_ScreenFooter.js";
import FullWindowOverlayDefault from "06152_FullWindowOverlay.js";
import _modDef6154 from "metro/06154__.js";
import RNSModule from "06105_RNSModule.js";

const require = globalThis.__r;
const _modDef6121 = _mod6121;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6120.enableScreens;
export const enableFreeze = _mod6120.enableFreeze;
export const screensEnabled = _mod6120.screensEnabled;
export const freezeEnabled = _mod6120.freezeEnabled;
export const Screen = _modDef6121;
export const InnerScreen = _mod6121.InnerScreen;
export const ScreenContext = _mod6121.ScreenContext;
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
export const ScreenStackItem = _modDef6143;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6128.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6128.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6154;
