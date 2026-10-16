// _runtime/05369_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05376_get_synchronousScreenUpdatesEnabled.js";
import _mod5385 from "metro/05385__.js";
import _mod5386 from "metro/05386__.js";
import _mod5393 from "metro/05393__.js";
import ScreenStackHeaderSubview from "05395_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05400_SearchBar.js";
import ScreenContainerDefault from "05402_ScreenContainer.js";
import ScreenStackDefault from "05404_ScreenStack.js";
import _modDef5408 from "metro/05408__.js";
import ScreenContentWrapperDefault from "05411_ScreenContentWrapper.js";
import ScreenFooterDefault from "05415_ScreenFooter.js";
import FullWindowOverlayDefault from "05417_FullWindowOverlay.js";
import _modDef5419 from "metro/05419__.js";
import RNSModule from "05370_RNSModule.js";

const require = globalThis.__r;
const _modDef5386 = _mod5386;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5385.enableScreens;
export const enableFreeze = _mod5385.enableFreeze;
export const screensEnabled = _mod5385.screensEnabled;
export const freezeEnabled = _mod5385.freezeEnabled;
export const Screen = _modDef5386;
export const InnerScreen = _mod5386.InnerScreen;
export const ScreenContext = _mod5386.ScreenContext;
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
export const ScreenStackItem = _modDef5408;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5393.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5393.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5419;
