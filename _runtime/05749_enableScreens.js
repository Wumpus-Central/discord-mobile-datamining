// _runtime/05749_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05756_get_synchronousScreenUpdatesEnabled.js";
import _mod5765 from "metro/05765__.js";
import _mod5766 from "metro/05766__.js";
import _mod5773 from "metro/05773__.js";
import ScreenStackHeaderSubview from "05775_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05780_SearchBar.js";
import ScreenContainerDefault from "05782_ScreenContainer.js";
import ScreenStackDefault from "05784_ScreenStack.js";
import _modDef5788 from "metro/05788__.js";
import ScreenContentWrapperDefault from "05791_ScreenContentWrapper.js";
import ScreenFooterDefault from "05795_ScreenFooter.js";
import FullWindowOverlayDefault from "05797_FullWindowOverlay.js";
import _modDef5799 from "metro/05799__.js";
import RNSModule from "05750_RNSModule.js";

const require = globalThis.__r;
const _modDef5766 = _mod5766;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5765.enableScreens;
export const enableFreeze = _mod5765.enableFreeze;
export const screensEnabled = _mod5765.screensEnabled;
export const freezeEnabled = _mod5765.freezeEnabled;
export const Screen = _modDef5766;
export const InnerScreen = _mod5766.InnerScreen;
export const ScreenContext = _mod5766.ScreenContext;
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
export const ScreenStackItem = _modDef5788;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5773.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5773.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5799;
