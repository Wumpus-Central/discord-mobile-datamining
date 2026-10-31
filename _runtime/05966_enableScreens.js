// _runtime/05966_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05973_get_synchronousScreenUpdatesEnabled.js";
import _mod5982 from "metro/05982__.js";
import _mod5983 from "metro/05983__.js";
import _mod5990 from "metro/05990__.js";
import ScreenStackHeaderSubview from "05992_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05997_SearchBar.js";
import ScreenContainerDefault from "05999_ScreenContainer.js";
import ScreenStackDefault from "06001_ScreenStack.js";
import _modDef6005 from "metro/06005__.js";
import ScreenContentWrapperDefault from "06008_ScreenContentWrapper.js";
import ScreenFooterDefault from "06012_ScreenFooter.js";
import FullWindowOverlayDefault from "06014_FullWindowOverlay.js";
import _modDef6016 from "metro/06016__.js";
import RNSModule from "05967_RNSModule.js";

const require = globalThis.__r;
const _modDef5983 = _mod5983;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5982.enableScreens;
export const enableFreeze = _mod5982.enableFreeze;
export const screensEnabled = _mod5982.screensEnabled;
export const freezeEnabled = _mod5982.freezeEnabled;
export const Screen = _modDef5983;
export const InnerScreen = _mod5983.InnerScreen;
export const ScreenContext = _mod5983.ScreenContext;
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
export const ScreenStackItem = _modDef6005;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5990.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5990.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6016;
