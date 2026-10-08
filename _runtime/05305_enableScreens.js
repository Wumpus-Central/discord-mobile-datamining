// _runtime/05305_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05312_get_synchronousScreenUpdatesEnabled.js";
import _mod5321 from "metro/05321__.js";
import _mod5322 from "metro/05322__.js";
import _mod5329 from "metro/05329__.js";
import ScreenStackHeaderSubview from "05331_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05336_SearchBar.js";
import ScreenContainerDefault from "05338_ScreenContainer.js";
import ScreenStackDefault from "05340_ScreenStack.js";
import _modDef5344 from "metro/05344__.js";
import ScreenContentWrapperDefault from "05347_ScreenContentWrapper.js";
import ScreenFooterDefault from "05351_ScreenFooter.js";
import FullWindowOverlayDefault from "05353_FullWindowOverlay.js";
import _modDef5355 from "metro/05355__.js";
import RNSModule from "05306_RNSModule.js";

const require = globalThis.__r;
const _modDef5322 = _mod5322;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5321.enableScreens;
export const enableFreeze = _mod5321.enableFreeze;
export const screensEnabled = _mod5321.screensEnabled;
export const freezeEnabled = _mod5321.freezeEnabled;
export const Screen = _modDef5322;
export const InnerScreen = _mod5322.InnerScreen;
export const ScreenContext = _mod5322.ScreenContext;
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
export const ScreenStackItem = _modDef5344;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5329.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5329.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5355;
