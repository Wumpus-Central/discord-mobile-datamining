// _runtime/05407_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05414_get_synchronousScreenUpdatesEnabled.js";
import _mod5423 from "metro/05423__.js";
import _mod5424 from "metro/05424__.js";
import _mod5431 from "metro/05431__.js";
import ScreenStackHeaderSubview from "05433_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05438_SearchBar.js";
import ScreenContainerDefault from "05440_ScreenContainer.js";
import ScreenStackDefault from "05442_ScreenStack.js";
import _modDef5446 from "metro/05446__.js";
import ScreenContentWrapperDefault from "05449_ScreenContentWrapper.js";
import ScreenFooterDefault from "05453_ScreenFooter.js";
import FullWindowOverlayDefault from "05455_FullWindowOverlay.js";
import _modDef5457 from "metro/05457__.js";
import RNSModule from "05408_RNSModule.js";

const require = globalThis.__r;
const _modDef5424 = _mod5424;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5423.enableScreens;
export const enableFreeze = _mod5423.enableFreeze;
export const screensEnabled = _mod5423.screensEnabled;
export const freezeEnabled = _mod5423.freezeEnabled;
export const Screen = _modDef5424;
export const InnerScreen = _mod5424.InnerScreen;
export const ScreenContext = _mod5424.ScreenContext;
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
export const ScreenStackItem = _modDef5446;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5431.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5431.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5457;
