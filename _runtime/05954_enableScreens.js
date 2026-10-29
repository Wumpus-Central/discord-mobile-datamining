// _runtime/05954_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05961_get_synchronousScreenUpdatesEnabled.js";
import _mod5970 from "metro/05970__.js";
import _mod5971 from "metro/05971__.js";
import _mod5978 from "metro/05978__.js";
import ScreenStackHeaderSubview from "05980_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05985_SearchBar.js";
import ScreenContainerDefault from "05987_ScreenContainer.js";
import ScreenStackDefault from "05989_ScreenStack.js";
import _modDef5993 from "metro/05993__.js";
import ScreenContentWrapperDefault from "05996_ScreenContentWrapper.js";
import ScreenFooterDefault from "06000_ScreenFooter.js";
import FullWindowOverlayDefault from "06002_FullWindowOverlay.js";
import _modDef6004 from "metro/06004__.js";
import RNSModule from "05955_RNSModule.js";

const require = globalThis.__r;
const _modDef5971 = _mod5971;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5970.enableScreens;
export const enableFreeze = _mod5970.enableFreeze;
export const screensEnabled = _mod5970.screensEnabled;
export const freezeEnabled = _mod5970.freezeEnabled;
export const Screen = _modDef5971;
export const InnerScreen = _mod5971.InnerScreen;
export const ScreenContext = _mod5971.ScreenContext;
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
export const ScreenStackItem = _modDef5993;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5978.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5978.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6004;
