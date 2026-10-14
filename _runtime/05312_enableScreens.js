// _runtime/05312_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05319_get_synchronousScreenUpdatesEnabled.js";
import _mod5328 from "metro/05328__.js";
import _mod5329 from "metro/05329__.js";
import _mod5336 from "metro/05336__.js";
import ScreenStackHeaderSubview from "05338_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05343_SearchBar.js";
import ScreenContainerDefault from "05345_ScreenContainer.js";
import ScreenStackDefault from "05347_ScreenStack.js";
import _modDef5351 from "metro/05351__.js";
import ScreenContentWrapperDefault from "05354_ScreenContentWrapper.js";
import ScreenFooterDefault from "05358_ScreenFooter.js";
import FullWindowOverlayDefault from "05360_FullWindowOverlay.js";
import _modDef5362 from "metro/05362__.js";
import RNSModule from "05313_RNSModule.js";

const require = globalThis.__r;
const _modDef5329 = _mod5329;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5328.enableScreens;
export const enableFreeze = _mod5328.enableFreeze;
export const screensEnabled = _mod5328.screensEnabled;
export const freezeEnabled = _mod5328.freezeEnabled;
export const Screen = _modDef5329;
export const InnerScreen = _mod5329.InnerScreen;
export const ScreenContext = _mod5329.ScreenContext;
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
export const ScreenStackItem = _modDef5351;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5336.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5336.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5362;
