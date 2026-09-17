// === Module 4992: enableScreens ===

// Module 4992 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4999 */;
import _mod5008 from "module_5008" /* 5008 */;
import _mod5009 from "module_5009" /* 5009 */;
import _mod5016 from "module_5016" /* 5016 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5018 */;
import SearchBarDefault from "SearchBar" /* 5023 */;
import ScreenContainerDefault from "ScreenContainer" /* 5025 */;
import ScreenStackDefault from "ScreenStack" /* 5027 */;
import _modDef5031 from "module_5031" /* 5031 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5034 */;
import ScreenFooterDefault from "ScreenFooter" /* 5038 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5040 */;
import _modDef5042 from "module_5042" /* 5042 */;
import RNSModule from "RNSModule" /* 4993 */;

const require = globalThis.__r;
const _modDef5009 = _mod5009;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5008.enableScreens;
export const enableFreeze = _mod5008.enableFreeze;
export const screensEnabled = _mod5008.screensEnabled;
export const freezeEnabled = _mod5008.freezeEnabled;
export const Screen = _modDef5009;
export const InnerScreen = _mod5009.InnerScreen;
export const ScreenContext = _mod5009.ScreenContext;
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
export const ScreenStackItem = _modDef5031;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5016.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5016.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5042;