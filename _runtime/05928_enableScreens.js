// _runtime/05928_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05935_get_synchronousScreenUpdatesEnabled.js";
import _mod5944 from "metro/05944__.js";
import _mod5945 from "metro/05945__.js";
import _mod5952 from "metro/05952__.js";
import ScreenStackHeaderSubview from "05954_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05959_SearchBar.js";
import ScreenContainerDefault from "05961_ScreenContainer.js";
import ScreenStackDefault from "05963_ScreenStack.js";
import _modDef5967 from "metro/05967__.js";
import ScreenContentWrapperDefault from "05970_ScreenContentWrapper.js";
import ScreenFooterDefault from "05974_ScreenFooter.js";
import FullWindowOverlayDefault from "05976_FullWindowOverlay.js";
import _modDef5978 from "metro/05978__.js";
import RNSModule from "05929_RNSModule.js";

const require = globalThis.__r;
const _modDef5945 = _mod5945;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5944.enableScreens;
export const enableFreeze = _mod5944.enableFreeze;
export const screensEnabled = _mod5944.screensEnabled;
export const freezeEnabled = _mod5944.freezeEnabled;
export const Screen = _modDef5945;
export const InnerScreen = _mod5945.InnerScreen;
export const ScreenContext = _mod5945.ScreenContext;
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
export const ScreenStackItem = _modDef5967;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5952.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5952.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5978;
