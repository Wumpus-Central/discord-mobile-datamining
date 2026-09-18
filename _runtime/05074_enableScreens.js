// _runtime/05074_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05081_get_synchronousScreenUpdatesEnabled.js";
import _mod5090 from "metro/05090__.js";
import _mod5091 from "metro/05091__.js";
import _mod5098 from "metro/05098__.js";
import ScreenStackHeaderSubview from "05100_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05105_SearchBar.js";
import ScreenContainerDefault from "05107_ScreenContainer.js";
import ScreenStackDefault from "05109_ScreenStack.js";
import _modDef5113 from "metro/05113__.js";
import ScreenContentWrapperDefault from "05116_ScreenContentWrapper.js";
import ScreenFooterDefault from "05120_ScreenFooter.js";
import FullWindowOverlayDefault from "05122_FullWindowOverlay.js";
import _modDef5124 from "metro/05124__.js";
import RNSModule from "05075_RNSModule.js";

const require = globalThis.__r;
const _modDef5091 = _mod5091;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5090.enableScreens;
export const enableFreeze = _mod5090.enableFreeze;
export const screensEnabled = _mod5090.screensEnabled;
export const freezeEnabled = _mod5090.freezeEnabled;
export const Screen = _modDef5091;
export const InnerScreen = _mod5091.InnerScreen;
export const ScreenContext = _mod5091.ScreenContext;
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
export const ScreenStackItem = _modDef5113;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5098.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5098.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5124;
