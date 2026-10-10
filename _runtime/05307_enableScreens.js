// _runtime/05307_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05314_get_synchronousScreenUpdatesEnabled.js";
import _mod5323 from "metro/05323__.js";
import _mod5324 from "metro/05324__.js";
import _mod5331 from "metro/05331__.js";
import ScreenStackHeaderSubview from "05333_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05338_SearchBar.js";
import ScreenContainerDefault from "05340_ScreenContainer.js";
import ScreenStackDefault from "05342_ScreenStack.js";
import _modDef5346 from "metro/05346__.js";
import ScreenContentWrapperDefault from "05349_ScreenContentWrapper.js";
import ScreenFooterDefault from "05353_ScreenFooter.js";
import FullWindowOverlayDefault from "05355_FullWindowOverlay.js";
import _modDef5357 from "metro/05357__.js";
import RNSModule from "05308_RNSModule.js";

const require = globalThis.__r;
const _modDef5324 = _mod5324;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5323.enableScreens;
export const enableFreeze = _mod5323.enableFreeze;
export const screensEnabled = _mod5323.screensEnabled;
export const freezeEnabled = _mod5323.freezeEnabled;
export const Screen = _modDef5324;
export const InnerScreen = _mod5324.InnerScreen;
export const ScreenContext = _mod5324.ScreenContext;
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
export const ScreenStackItem = _modDef5346;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5331.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5331.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5357;
