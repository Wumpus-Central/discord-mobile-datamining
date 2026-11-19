// _runtime/05747_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05754_get_synchronousScreenUpdatesEnabled.js";
import _mod5763 from "metro/05763__.js";
import _mod5764 from "metro/05764__.js";
import _mod5771 from "metro/05771__.js";
import ScreenStackHeaderSubview from "05773_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05778_SearchBar.js";
import ScreenContainerDefault from "05780_ScreenContainer.js";
import ScreenStackDefault from "05782_ScreenStack.js";
import _modDef5786 from "metro/05786__.js";
import ScreenContentWrapperDefault from "05789_ScreenContentWrapper.js";
import ScreenFooterDefault from "05793_ScreenFooter.js";
import FullWindowOverlayDefault from "05795_FullWindowOverlay.js";
import _modDef5797 from "metro/05797__.js";
import RNSModule from "05748_RNSModule.js";

const require = globalThis.__r;
const _modDef5764 = _mod5764;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5763.enableScreens;
export const enableFreeze = _mod5763.enableFreeze;
export const screensEnabled = _mod5763.screensEnabled;
export const freezeEnabled = _mod5763.freezeEnabled;
export const Screen = _modDef5764;
export const InnerScreen = _mod5764.InnerScreen;
export const ScreenContext = _mod5764.ScreenContext;
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
export const ScreenStackItem = _modDef5786;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5771.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5771.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5797;
