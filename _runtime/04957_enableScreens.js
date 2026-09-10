// _runtime/04957_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "04964_get_synchronousScreenUpdatesEnabled.js";
import _mod4973 from "metro/04973__.js";
import _mod4974 from "metro/04974__.js";
import _mod4981 from "metro/04981__.js";
import ScreenStackHeaderSubview from "04983_ScreenStackHeaderSubview.js";
import SearchBarDefault from "04988_SearchBar.js";
import ScreenContainerDefault from "04990_ScreenContainer.js";
import ScreenStackDefault from "04992_ScreenStack.js";
import _modDef4996 from "metro/04996__.js";
import ScreenContentWrapperDefault from "04999_ScreenContentWrapper.js";
import ScreenFooterDefault from "05003_ScreenFooter.js";
import FullWindowOverlayDefault from "05005_FullWindowOverlay.js";
import _modDef5007 from "metro/05007__.js";
import RNSModule from "04958_RNSModule.js";

const _modDef4974 = _mod4974;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod4973.enableScreens;
export const enableFreeze = _mod4973.enableFreeze;
export const screensEnabled = _mod4973.screensEnabled;
export const freezeEnabled = _mod4973.freezeEnabled;
export const Screen = _modDef4974;
export const InnerScreen = _mod4974.InnerScreen;
export const ScreenContext = _mod4974.ScreenContext;
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
export const ScreenStackItem = _modDef4996;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4981.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4981.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5007;
