// _runtime/05715_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05722_get_synchronousScreenUpdatesEnabled.js";
import _mod5731 from "metro/05731__.js";
import _mod5732 from "metro/05732__.js";
import _mod5739 from "metro/05739__.js";
import ScreenStackHeaderSubview from "05741_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05746_SearchBar.js";
import ScreenContainerDefault from "05748_ScreenContainer.js";
import ScreenStackDefault from "05750_ScreenStack.js";
import _modDef5754 from "metro/05754__.js";
import ScreenContentWrapperDefault from "05757_ScreenContentWrapper.js";
import ScreenFooterDefault from "05761_ScreenFooter.js";
import FullWindowOverlayDefault from "05763_FullWindowOverlay.js";
import _modDef5765 from "metro/05765__.js";
import RNSModule from "05716_RNSModule.js";

const require = globalThis.__r;
const _modDef5732 = _mod5732;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5731.enableScreens;
export const enableFreeze = _mod5731.enableFreeze;
export const screensEnabled = _mod5731.screensEnabled;
export const freezeEnabled = _mod5731.freezeEnabled;
export const Screen = _modDef5732;
export const InnerScreen = _mod5732.InnerScreen;
export const ScreenContext = _mod5732.ScreenContext;
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
export const ScreenStackItem = _modDef5754;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5739.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5739.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5765;
