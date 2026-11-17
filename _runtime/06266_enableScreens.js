// _runtime/06266_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06273_get_synchronousScreenUpdatesEnabled.js";
import _mod6282 from "metro/06282__.js";
import _mod6283 from "metro/06283__.js";
import _mod6290 from "metro/06290__.js";
import ScreenStackHeaderSubview from "06292_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06297_SearchBar.js";
import ScreenContainerDefault from "06299_ScreenContainer.js";
import ScreenStackDefault from "06301_ScreenStack.js";
import _modDef6305 from "metro/06305__.js";
import ScreenContentWrapperDefault from "06308_ScreenContentWrapper.js";
import ScreenFooterDefault from "06312_ScreenFooter.js";
import FullWindowOverlayDefault from "06314_FullWindowOverlay.js";
import _modDef6316 from "metro/06316__.js";
import RNSModule from "06267_RNSModule.js";

const require = globalThis.__r;
const _modDef6283 = _mod6283;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6282.enableScreens;
export const enableFreeze = _mod6282.enableFreeze;
export const screensEnabled = _mod6282.screensEnabled;
export const freezeEnabled = _mod6282.freezeEnabled;
export const Screen = _modDef6283;
export const InnerScreen = _mod6283.InnerScreen;
export const ScreenContext = _mod6283.ScreenContext;
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
export const ScreenStackItem = _modDef6305;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6290.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6290.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6316;
