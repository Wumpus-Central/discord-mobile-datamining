// _runtime/05776_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05783_get_synchronousScreenUpdatesEnabled.js";
import _mod5792 from "metro/05792__.js";
import _mod5793 from "metro/05793__.js";
import _mod5800 from "metro/05800__.js";
import ScreenStackHeaderSubview from "05802_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05807_SearchBar.js";
import ScreenContainerDefault from "05809_ScreenContainer.js";
import ScreenStackDefault from "05811_ScreenStack.js";
import _modDef5815 from "metro/05815__.js";
import ScreenContentWrapperDefault from "05818_ScreenContentWrapper.js";
import ScreenFooterDefault from "05822_ScreenFooter.js";
import FullWindowOverlayDefault from "05824_FullWindowOverlay.js";
import _modDef5826 from "metro/05826__.js";
import RNSModule from "05777_RNSModule.js";

const require = globalThis.__r;
const _modDef5793 = _mod5793;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5792.enableScreens;
export const enableFreeze = _mod5792.enableFreeze;
export const screensEnabled = _mod5792.screensEnabled;
export const freezeEnabled = _mod5792.freezeEnabled;
export const Screen = _modDef5793;
export const InnerScreen = _mod5793.InnerScreen;
export const ScreenContext = _mod5793.ScreenContext;
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
export const ScreenStackItem = _modDef5815;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5800.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5800.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5826;
