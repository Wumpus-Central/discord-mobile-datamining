// _runtime/06124_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06131_get_synchronousScreenUpdatesEnabled.js";
import _mod6140 from "metro/06140__.js";
import _mod6141 from "metro/06141__.js";
import _mod6148 from "metro/06148__.js";
import ScreenStackHeaderSubview from "06150_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06155_SearchBar.js";
import ScreenContainerDefault from "06157_ScreenContainer.js";
import ScreenStackDefault from "06159_ScreenStack.js";
import _modDef6163 from "metro/06163__.js";
import ScreenContentWrapperDefault from "06166_ScreenContentWrapper.js";
import ScreenFooterDefault from "06170_ScreenFooter.js";
import FullWindowOverlayDefault from "06172_FullWindowOverlay.js";
import _modDef6174 from "metro/06174__.js";
import RNSModule from "06125_RNSModule.js";

const require = globalThis.__r;
const _modDef6141 = _mod6141;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6140.enableScreens;
export const enableFreeze = _mod6140.enableFreeze;
export const screensEnabled = _mod6140.screensEnabled;
export const freezeEnabled = _mod6140.freezeEnabled;
export const Screen = _modDef6141;
export const InnerScreen = _mod6141.InnerScreen;
export const ScreenContext = _mod6141.ScreenContext;
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
export const ScreenStackItem = _modDef6163;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6148.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6148.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6174;
