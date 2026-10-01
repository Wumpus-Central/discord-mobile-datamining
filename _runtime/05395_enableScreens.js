// _runtime/05395_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05402_get_synchronousScreenUpdatesEnabled.js";
import _mod5411 from "metro/05411__.js";
import _mod5412 from "metro/05412__.js";
import _mod5419 from "metro/05419__.js";
import ScreenStackHeaderSubview from "05421_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05426_SearchBar.js";
import ScreenContainerDefault from "05428_ScreenContainer.js";
import ScreenStackDefault from "05430_ScreenStack.js";
import _modDef5434 from "metro/05434__.js";
import ScreenContentWrapperDefault from "05437_ScreenContentWrapper.js";
import ScreenFooterDefault from "05441_ScreenFooter.js";
import FullWindowOverlayDefault from "05443_FullWindowOverlay.js";
import _modDef5445 from "metro/05445__.js";
import RNSModule from "05396_RNSModule.js";

const require = globalThis.__r;
const _modDef5412 = _mod5412;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5411.enableScreens;
export const enableFreeze = _mod5411.enableFreeze;
export const screensEnabled = _mod5411.screensEnabled;
export const freezeEnabled = _mod5411.freezeEnabled;
export const Screen = _modDef5412;
export const InnerScreen = _mod5412.InnerScreen;
export const ScreenContext = _mod5412.ScreenContext;
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
export const ScreenStackItem = _modDef5434;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5419.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5419.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5445;
