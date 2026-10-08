// === Module 5305: enableScreens ===

// Module 5305 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5312 */;
import _mod5321 from "module_5321" /* 5321 */;
import _mod5322 from "module_5322" /* 5322 */;
import _mod5329 from "module_5329" /* 5329 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5331 */;
import SearchBarDefault from "SearchBar" /* 5336 */;
import ScreenContainerDefault from "ScreenContainer" /* 5338 */;
import ScreenStackDefault from "ScreenStack" /* 5340 */;
import _modDef5344 from "module_5344" /* 5344 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5347 */;
import ScreenFooterDefault from "ScreenFooter" /* 5351 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5353 */;
import _modDef5355 from "module_5355" /* 5355 */;
import RNSModule from "RNSModule" /* 5306 */;

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