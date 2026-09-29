// _runtime/05377_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05384_get_synchronousScreenUpdatesEnabled.js";
import _mod5393 from "metro/05393__.js";
import _mod5394 from "metro/05394__.js";
import _mod5401 from "metro/05401__.js";
import ScreenStackHeaderSubview from "05403_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05408_SearchBar.js";
import ScreenContainerDefault from "05410_ScreenContainer.js";
import ScreenStackDefault from "05412_ScreenStack.js";
import _modDef5416 from "metro/05416__.js";
import ScreenContentWrapperDefault from "05419_ScreenContentWrapper.js";
import ScreenFooterDefault from "05423_ScreenFooter.js";
import FullWindowOverlayDefault from "05425_FullWindowOverlay.js";
import _modDef5427 from "metro/05427__.js";
import RNSModule from "05378_RNSModule.js";

const require = globalThis.__r;
const _modDef5394 = _mod5394;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5393.enableScreens;
export const enableFreeze = _mod5393.enableFreeze;
export const screensEnabled = _mod5393.screensEnabled;
export const freezeEnabled = _mod5393.freezeEnabled;
export const Screen = _modDef5394;
export const InnerScreen = _mod5394.InnerScreen;
export const ScreenContext = _mod5394.ScreenContext;
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
export const ScreenStackItem = _modDef5416;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5401.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5401.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5427;
