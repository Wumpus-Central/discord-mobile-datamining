// _runtime/06100_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "06107_get_synchronousScreenUpdatesEnabled.js";
import _mod6116 from "metro/06116__.js";
import _mod6117 from "metro/06117__.js";
import _mod6124 from "metro/06124__.js";
import ScreenStackHeaderSubview from "06126_ScreenStackHeaderSubview.js";
import SearchBarDefault from "06131_SearchBar.js";
import ScreenContainerDefault from "06133_ScreenContainer.js";
import ScreenStackDefault from "06135_ScreenStack.js";
import _modDef6139 from "metro/06139__.js";
import ScreenContentWrapperDefault from "06142_ScreenContentWrapper.js";
import ScreenFooterDefault from "06146_ScreenFooter.js";
import FullWindowOverlayDefault from "06148_FullWindowOverlay.js";
import _modDef6150 from "metro/06150__.js";
import RNSModule from "06101_RNSModule.js";

const require = globalThis.__r;
const _modDef6117 = _mod6117;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6116.enableScreens;
export const enableFreeze = _mod6116.enableFreeze;
export const screensEnabled = _mod6116.screensEnabled;
export const freezeEnabled = _mod6116.freezeEnabled;
export const Screen = _modDef6117;
export const InnerScreen = _mod6117.InnerScreen;
export const ScreenContext = _mod6117.ScreenContext;
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
export const ScreenStackItem = _modDef6139;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6124.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6124.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6150;
