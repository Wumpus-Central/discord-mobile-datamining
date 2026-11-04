// _runtime/06101_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06108_get_synchronousScreenUpdatesEnabled.js";
import _mod6117 from "metro/06117__.js";
import _mod6118 from "metro/06118__.js";
import _mod6125 from "metro/06125__.js";
import ScreenStackHeaderSubview from "06127_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06132_SearchBar.js";
import ScreenContainerDefault from "06134_ScreenContainer.js";
import ScreenStackDefault from "06136_ScreenStack.js";
import _modDef6140 from "metro/06140__.js";
import ScreenContentWrapperDefault from "06143_ScreenContentWrapper.js";
import ScreenFooterDefault from "06147_ScreenFooter.js";
import FullWindowOverlayDefault from "06149_FullWindowOverlay.js";
import _modDef6151 from "metro/06151__.js";
import RNSModule from "06102_RNSModule.js";

const require = globalThis.__r;
const _modDef6118 = _mod6118;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6117.enableScreens;
export const enableFreeze = _mod6117.enableFreeze;
export const screensEnabled = _mod6117.screensEnabled;
export const freezeEnabled = _mod6117.freezeEnabled;
export const Screen = _modDef6118;
export const InnerScreen = _mod6118.InnerScreen;
export const ScreenContext = _mod6118.ScreenContext;
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
export const ScreenStackItem = _modDef6140;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6125.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6125.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6151;
