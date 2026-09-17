// _runtime/04992_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "04999_get_synchronousScreenUpdatesEnabled.js";
import _mod5008 from "metro/05008__.js";
import _mod5009 from "metro/05009__.js";
import _mod5016 from "metro/05016__.js";
import ScreenStackHeaderSubview from "05018_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05023_SearchBar.js";
import ScreenContainerDefault from "05025_ScreenContainer.js";
import ScreenStackDefault from "05027_ScreenStack.js";
import _modDef5031 from "metro/05031__.js";
import ScreenContentWrapperDefault from "05034_ScreenContentWrapper.js";
import ScreenFooterDefault from "05038_ScreenFooter.js";
import FullWindowOverlayDefault from "05040_FullWindowOverlay.js";
import _modDef5042 from "metro/05042__.js";
import RNSModule from "04993_RNSModule.js";

const require = globalThis.__r;
const _modDef5009 = _mod5009;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5008.enableScreens;
export const enableFreeze = _mod5008.enableFreeze;
export const screensEnabled = _mod5008.screensEnabled;
export const freezeEnabled = _mod5008.freezeEnabled;
export const Screen = _modDef5009;
export const InnerScreen = _mod5009.InnerScreen;
export const ScreenContext = _mod5009.ScreenContext;
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
export const ScreenStackItem = _modDef5031;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5016.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5016.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5042;
