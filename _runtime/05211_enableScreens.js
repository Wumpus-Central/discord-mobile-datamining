// === Module 5211: enableScreens ===

// Module 5211 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5218 */;
import _mod5227 from "module_5227" /* 5227 */;
import _mod5228 from "module_5228" /* 5228 */;
import _mod5235 from "module_5235" /* 5235 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5237 */;
import SearchBarDefault from "SearchBar" /* 5242 */;
import ScreenContainerDefault from "ScreenContainer" /* 5244 */;
import ScreenStackDefault from "ScreenStack" /* 5246 */;
import _modDef5250 from "module_5250" /* 5250 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5253 */;
import ScreenFooterDefault from "ScreenFooter" /* 5257 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5259 */;
import _modDef5261 from "module_5261" /* 5261 */;
import RNSModule from "RNSModule" /* 5212 */;

const require = globalThis.__r;
const _modDef5228 = _mod5228;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5227.enableScreens;
export const enableFreeze = _mod5227.enableFreeze;
export const screensEnabled = _mod5227.screensEnabled;
export const freezeEnabled = _mod5227.freezeEnabled;
export const Screen = _modDef5228;
export const InnerScreen = _mod5228.InnerScreen;
export const ScreenContext = _mod5228.ScreenContext;
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
export const ScreenStackItem = _modDef5250;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5235.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5235.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5261;