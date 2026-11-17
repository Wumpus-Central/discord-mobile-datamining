// === Module 6274: enableScreens ===

// Module 6274 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6281 */;
import _mod6290 from "module_6290" /* 6290 */;
import _mod6291 from "module_6291" /* 6291 */;
import _mod6298 from "module_6298" /* 6298 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6300 */;
import SearchBarDefault from "SearchBar" /* 6305 */;
import ScreenContainerDefault from "ScreenContainer" /* 6307 */;
import ScreenStackDefault from "ScreenStack" /* 6309 */;
import _modDef6313 from "module_6313" /* 6313 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6316 */;
import ScreenFooterDefault from "ScreenFooter" /* 6320 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6322 */;
import _modDef6324 from "module_6324" /* 6324 */;
import RNSModule from "RNSModule" /* 6275 */;

const require = globalThis.__r;
const _modDef6291 = _mod6291;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod6290.enableScreens;
export const enableFreeze = _mod6290.enableFreeze;
export const screensEnabled = _mod6290.screensEnabled;
export const freezeEnabled = _mod6290.freezeEnabled;
export const Screen = _modDef6291;
export const InnerScreen = _mod6291.InnerScreen;
export const ScreenContext = _mod6291.ScreenContext;
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
export const ScreenStackItem = _modDef6313;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod6298.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod6298.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6324;