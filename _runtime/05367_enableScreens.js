// _runtime/05367_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05374_get_synchronousScreenUpdatesEnabled.js";
import _mod5383 from "metro/05383__.js";
import _mod5384 from "metro/05384__.js";
import _mod5391 from "metro/05391__.js";
import ScreenStackHeaderSubview from "05393_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05398_SearchBar.js";
import ScreenContainerDefault from "05400_ScreenContainer.js";
import ScreenStackDefault from "05402_ScreenStack.js";
import _modDef5406 from "metro/05406__.js";
import ScreenContentWrapperDefault from "05409_ScreenContentWrapper.js";
import ScreenFooterDefault from "05413_ScreenFooter.js";
import FullWindowOverlayDefault from "05415_FullWindowOverlay.js";
import _modDef5417 from "metro/05417__.js";
import RNSModule from "05368_RNSModule.js";

const require = globalThis.__r;
const _modDef5384 = _mod5384;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5383.enableScreens;
export const enableFreeze = _mod5383.enableFreeze;
export const screensEnabled = _mod5383.screensEnabled;
export const freezeEnabled = _mod5383.freezeEnabled;
export const Screen = _modDef5384;
export const InnerScreen = _mod5384.InnerScreen;
export const ScreenContext = _mod5384.ScreenContext;
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
export const ScreenStackItem = _modDef5406;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5391.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5391.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5417;
