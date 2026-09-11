// === Module 4958: enableScreens ===

// Module 4958 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4965 */;
import _mod4974 from "module_4974" /* 4974 */;
import _mod4975 from "module_4975" /* 4975 */;
import _mod4982 from "module_4982" /* 4982 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4984 */;
import SearchBarDefault from "SearchBar" /* 4989 */;
import ScreenContainerDefault from "ScreenContainer" /* 4991 */;
import ScreenStackDefault from "ScreenStack" /* 4993 */;
import _modDef4997 from "module_4997" /* 4997 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5000 */;
import ScreenFooterDefault from "ScreenFooter" /* 5004 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5006 */;
import _modDef5008 from "module_5008" /* 5008 */;
import RNSModule from "RNSModule" /* 4959 */;

const _modDef4975 = _mod4975;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod4974.enableScreens;
export const enableFreeze = _mod4974.enableFreeze;
export const screensEnabled = _mod4974.screensEnabled;
export const freezeEnabled = _mod4974.freezeEnabled;
export const Screen = _modDef4975;
export const InnerScreen = _mod4975.InnerScreen;
export const ScreenContext = _mod4975.ScreenContext;
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
export const ScreenStackItem = _modDef4997;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4982.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4982.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5008;