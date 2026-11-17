// _runtime/06274_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06281_get_synchronousScreenUpdatesEnabled.js";
import _mod6290 from "metro/06290__.js";
import _mod6291 from "metro/06291__.js";
import _mod6298 from "metro/06298__.js";
import ScreenStackHeaderSubview from "06300_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06305_SearchBar.js";
import ScreenContainerDefault from "06307_ScreenContainer.js";
import ScreenStackDefault from "06309_ScreenStack.js";
import _modDef6313 from "metro/06313__.js";
import ScreenContentWrapperDefault from "06316_ScreenContentWrapper.js";
import ScreenFooterDefault from "06320_ScreenFooter.js";
import FullWindowOverlayDefault from "06322_FullWindowOverlay.js";
import _modDef6324 from "metro/06324__.js";
import RNSModule from "06275_RNSModule.js";

const require = globalThis.__r;
const _modDef6291 = _mod6291;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6290.enableScreens;
export const enableFreeze = _mod6290.enableFreeze;
export const screensEnabled = _mod6290.screensEnabled;
export const freezeEnabled = _mod6290.freezeEnabled;
export const Screen = _modDef6291;
export const InnerScreen = _mod6291.InnerScreen;
export const ScreenContext = _mod6291.ScreenContext;
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
export const ScreenStackItem = _modDef6313;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6298.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6298.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6324;
