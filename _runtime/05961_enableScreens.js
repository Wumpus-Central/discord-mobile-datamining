// === Module 5961: enableScreens ===

// Module 5961 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5968 */;
import _mod5977 from "module_5977" /* 5977 */;
import _mod5978 from "module_5978" /* 5978 */;
import _mod5985 from "module_5985" /* 5985 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5987 */;
import SearchBarDefault from "SearchBar" /* 5992 */;
import ScreenContainerDefault from "ScreenContainer" /* 5994 */;
import ScreenStackDefault from "ScreenStack" /* 5996 */;
import _modDef6000 from "module_6000" /* 6000 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6003 */;
import ScreenFooterDefault from "ScreenFooter" /* 6007 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6009 */;
import _modDef6011 from "module_6011" /* 6011 */;
import RNSModule from "RNSModule" /* 5962 */;

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