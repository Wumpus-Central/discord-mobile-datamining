// === Module 5747: enableScreens ===

// Module 5747 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5754 */;
import _mod5763 from "module_5763" /* 5763 */;
import _mod5764 from "module_5764" /* 5764 */;
import _mod5771 from "module_5771" /* 5771 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5773 */;
import SearchBarDefault from "SearchBar" /* 5778 */;
import ScreenContainerDefault from "ScreenContainer" /* 5780 */;
import ScreenStackDefault from "ScreenStack" /* 5782 */;
import _modDef5786 from "module_5786" /* 5786 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5789 */;
import ScreenFooterDefault from "ScreenFooter" /* 5793 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5795 */;
import _modDef5797 from "module_5797" /* 5797 */;
import RNSModule from "RNSModule" /* 5748 */;

const require = globalThis.__r;
const _modDef5764 = _mod5764;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5763.enableScreens;
export const enableFreeze = _mod5763.enableFreeze;
export const screensEnabled = _mod5763.screensEnabled;
export const freezeEnabled = _mod5763.freezeEnabled;
export const Screen = _modDef5764;
export const InnerScreen = _mod5764.InnerScreen;
export const ScreenContext = _mod5764.ScreenContext;
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
export const ScreenStackItem = _modDef5786;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5771.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5771.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5797;