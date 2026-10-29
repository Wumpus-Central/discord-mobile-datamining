// === Module 5954: enableScreens ===

// Module 5954 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5961 */;
import _mod5970 from "module_5970" /* 5970 */;
import _mod5971 from "module_5971" /* 5971 */;
import _mod5978 from "module_5978" /* 5978 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5980 */;
import SearchBarDefault from "SearchBar" /* 5985 */;
import ScreenContainerDefault from "ScreenContainer" /* 5987 */;
import ScreenStackDefault from "ScreenStack" /* 5989 */;
import _modDef5993 from "module_5993" /* 5993 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5996 */;
import ScreenFooterDefault from "ScreenFooter" /* 6000 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6002 */;
import _modDef6004 from "module_6004" /* 6004 */;
import RNSModule from "RNSModule" /* 5955 */;

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