// _runtime/05914_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05921_get_synchronousScreenUpdatesEnabled.js";
import _mod5930 from "metro/05930__.js";
import _mod5931 from "metro/05931__.js";
import _mod5938 from "metro/05938__.js";
import ScreenStackHeaderSubview from "05940_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05945_SearchBar.js";
import ScreenContainerDefault from "05947_ScreenContainer.js";
import ScreenStackDefault from "05949_ScreenStack.js";
import _modDef5953 from "metro/05953__.js";
import ScreenContentWrapperDefault from "05956_ScreenContentWrapper.js";
import ScreenFooterDefault from "05960_ScreenFooter.js";
import FullWindowOverlayDefault from "05962_FullWindowOverlay.js";
import _modDef5964 from "metro/05964__.js";
import RNSModule from "05915_RNSModule.js";

const require = globalThis.__r;
const _modDef5931 = _mod5931;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5930.enableScreens;
export const enableFreeze = _mod5930.enableFreeze;
export const screensEnabled = _mod5930.screensEnabled;
export const freezeEnabled = _mod5930.freezeEnabled;
export const Screen = _modDef5931;
export const InnerScreen = _mod5931.InnerScreen;
export const ScreenContext = _mod5931.ScreenContext;
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
export const ScreenStackItem = _modDef5953;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5938.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5938.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5964;
