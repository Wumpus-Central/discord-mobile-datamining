// _runtime/06023_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06030_get_synchronousScreenUpdatesEnabled.js";
import _mod6039 from "metro/06039__.js";
import _mod6040 from "metro/06040__.js";
import _mod6047 from "metro/06047__.js";
import ScreenStackHeaderSubview from "06049_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06054_SearchBar.js";
import ScreenContainerDefault from "06056_ScreenContainer.js";
import ScreenStackDefault from "06058_ScreenStack.js";
import _modDef6062 from "metro/06062__.js";
import ScreenContentWrapperDefault from "06065_ScreenContentWrapper.js";
import ScreenFooterDefault from "06069_ScreenFooter.js";
import FullWindowOverlayDefault from "06071_FullWindowOverlay.js";
import _modDef6073 from "metro/06073__.js";
import RNSModule from "06024_RNSModule.js";

const require = globalThis.__r;
const _modDef6040 = _mod6040;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6039.enableScreens;
export const enableFreeze = _mod6039.enableFreeze;
export const screensEnabled = _mod6039.screensEnabled;
export const freezeEnabled = _mod6039.freezeEnabled;
export const Screen = _modDef6040;
export const InnerScreen = _mod6040.InnerScreen;
export const ScreenContext = _mod6040.ScreenContext;
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
export const ScreenStackItem = _modDef6062;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6047.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6047.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6073;
