// _runtime/05916_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05923_get_synchronousScreenUpdatesEnabled.js";
import _mod5932 from "metro/05932__.js";
import _mod5933 from "metro/05933__.js";
import _mod5940 from "metro/05940__.js";
import ScreenStackHeaderSubview from "05942_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05947_SearchBar.js";
import ScreenContainerDefault from "05949_ScreenContainer.js";
import ScreenStackDefault from "05951_ScreenStack.js";
import _modDef5955 from "metro/05955__.js";
import ScreenContentWrapperDefault from "05958_ScreenContentWrapper.js";
import ScreenFooterDefault from "05962_ScreenFooter.js";
import FullWindowOverlayDefault from "05964_FullWindowOverlay.js";
import _modDef5966 from "metro/05966__.js";
import RNSModule from "05917_RNSModule.js";

const require = globalThis.__r;
const _modDef5933 = _mod5933;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5932.enableScreens;
export const enableFreeze = _mod5932.enableFreeze;
export const screensEnabled = _mod5932.screensEnabled;
export const freezeEnabled = _mod5932.freezeEnabled;
export const Screen = _modDef5933;
export const InnerScreen = _mod5933.InnerScreen;
export const ScreenContext = _mod5933.ScreenContext;
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
export const ScreenStackItem = _modDef5955;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5940.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5940.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5966;
