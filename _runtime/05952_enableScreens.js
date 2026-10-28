// === Module 5952: enableScreens ===

// Module 5952 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5959 */;
import _mod5968 from "module_5968" /* 5968 */;
import _mod5969 from "module_5969" /* 5969 */;
import _mod5976 from "module_5976" /* 5976 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5978 */;
import SearchBarDefault from "SearchBar" /* 5983 */;
import ScreenContainerDefault from "ScreenContainer" /* 5985 */;
import ScreenStackDefault from "ScreenStack" /* 5987 */;
import _modDef5991 from "module_5991" /* 5991 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5994 */;
import ScreenFooterDefault from "ScreenFooter" /* 5998 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6000 */;
import _modDef6002 from "module_6002" /* 6002 */;
import RNSModule from "RNSModule" /* 5953 */;

const require = globalThis.__r;
const _modDef5969 = _mod5969;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5968.enableScreens;
export const enableFreeze = _mod5968.enableFreeze;
export const screensEnabled = _mod5968.screensEnabled;
export const freezeEnabled = _mod5968.freezeEnabled;
export const Screen = _modDef5969;
export const InnerScreen = _mod5969.InnerScreen;
export const ScreenContext = _mod5969.ScreenContext;
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
export const ScreenStackItem = _modDef5991;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5976.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5976.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6002;