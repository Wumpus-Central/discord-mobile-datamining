// _runtime/04958_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "04965_get_synchronousScreenUpdatesEnabled.js";
import _mod4974 from "metro/04974__.js";
import _mod4975 from "metro/04975__.js";
import _mod4982 from "metro/04982__.js";
import ScreenStackHeaderSubview from "04984_ScreenStackHeaderSubview.js";
import SearchBarDefault from "04989_SearchBar.js";
import ScreenContainerDefault from "04991_ScreenContainer.js";
import ScreenStackDefault from "04993_ScreenStack.js";
import _modDef4997 from "metro/04997__.js";
import ScreenContentWrapperDefault from "05000_ScreenContentWrapper.js";
import ScreenFooterDefault from "05004_ScreenFooter.js";
import FullWindowOverlayDefault from "05006_FullWindowOverlay.js";
import _modDef5008 from "metro/05008__.js";
import RNSModule from "04959_RNSModule.js";

const _modDef4975 = _mod4975;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod4974.enableScreens;
export const enableFreeze = _mod4974.enableFreeze;
export const screensEnabled = _mod4974.screensEnabled;
export const freezeEnabled = _mod4974.freezeEnabled;
export const Screen = _modDef4975;
export const InnerScreen = _mod4975.InnerScreen;
export const ScreenContext = _mod4975.ScreenContext;
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
export const ScreenStackItem = _modDef4997;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4982.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4982.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5008;
