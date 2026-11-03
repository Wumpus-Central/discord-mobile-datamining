// _runtime/06086_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06093_get_synchronousScreenUpdatesEnabled.js";
import _mod6102 from "metro/06102__.js";
import _mod6103 from "metro/06103__.js";
import _mod6110 from "metro/06110__.js";
import ScreenStackHeaderSubview from "06112_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06117_SearchBar.js";
import ScreenContainerDefault from "06119_ScreenContainer.js";
import ScreenStackDefault from "06121_ScreenStack.js";
import _modDef6125 from "metro/06125__.js";
import ScreenContentWrapperDefault from "06128_ScreenContentWrapper.js";
import ScreenFooterDefault from "06132_ScreenFooter.js";
import FullWindowOverlayDefault from "06134_FullWindowOverlay.js";
import _modDef6136 from "metro/06136__.js";
import RNSModule from "06087_RNSModule.js";

const require = globalThis.__r;
const _modDef6103 = _mod6103;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6102.enableScreens;
export const enableFreeze = _mod6102.enableFreeze;
export const screensEnabled = _mod6102.screensEnabled;
export const freezeEnabled = _mod6102.freezeEnabled;
export const Screen = _modDef6103;
export const InnerScreen = _mod6103.InnerScreen;
export const ScreenContext = _mod6103.ScreenContext;
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
export const ScreenStackItem = _modDef6125;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6110.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6110.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6136;
