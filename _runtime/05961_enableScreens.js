// _runtime/05961_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05968_get_synchronousScreenUpdatesEnabled.js";
import _mod5977 from "metro/05977__.js";
import _mod5978 from "metro/05978__.js";
import _mod5985 from "metro/05985__.js";
import ScreenStackHeaderSubview from "05987_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05992_SearchBar.js";
import ScreenContainerDefault from "05994_ScreenContainer.js";
import ScreenStackDefault from "05996_ScreenStack.js";
import _modDef6000 from "metro/06000__.js";
import ScreenContentWrapperDefault from "06003_ScreenContentWrapper.js";
import ScreenFooterDefault from "06007_ScreenFooter.js";
import FullWindowOverlayDefault from "06009_FullWindowOverlay.js";
import _modDef6011 from "metro/06011__.js";
import RNSModule from "05962_RNSModule.js";

const require = globalThis.__r;
const _modDef5978 = _mod5978;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5977.enableScreens;
export const enableFreeze = _mod5977.enableFreeze;
export const screensEnabled = _mod5977.screensEnabled;
export const freezeEnabled = _mod5977.freezeEnabled;
export const Screen = _modDef5978;
export const InnerScreen = _mod5978.InnerScreen;
export const ScreenContext = _mod5978.ScreenContext;
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
export const ScreenStackItem = _modDef6000;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5985.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5985.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6011;
