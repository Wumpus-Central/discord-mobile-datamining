// === Module 4926: enableScreens ===

// Module 4926 (enableScreens)
import _mod4929 from "module_4929" /* 4929 */;
import _mod4930 from "module_4930" /* 4930 */;
import _mod4938 from "module_4938" /* 4938 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4939 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4941 */;
import _mod4942 from "module_4942" /* 4942 */;
import _modDef4946 from "module_4946" /* 4946 */;
import ScreenContainerDefault from "ScreenContainer" /* 4948 */;
import ScreenStackDefault from "ScreenStack" /* 4950 */;
import _modDef4953 from "module_4953" /* 4953 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4955 */;
import ScreenFooterDefault from "ScreenFooter" /* 4957 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4959 */;
import _modDef4961 from "module_4961" /* 4961 */;
import TabsHostDefault from "TabsHost" /* 4962 */;
import RNSModule from "RNSModule" /* 4927 */;

const _modDef4930 = _mod4930;

for (const key10015 in require("module_4928")) {
  arg5[key10015] = require("module_4928")[key10015];
  continue;
}

export const enableScreens = _mod4929.enableScreens;
export const enableFreeze = _mod4929.enableFreeze;
export const screensEnabled = _mod4929.screensEnabled;
export const freezeEnabled = _mod4929.freezeEnabled;
export const Screen = _modDef4930;
export const InnerScreen = _mod4930.InnerScreen;
export const ScreenContext = _mod4930.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = _modDef4946;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4953;
export const EdgeInsetApplicationContext = _mod4942.EdgeInsetApplicationContext;
export const useEdgeInsetApplication = _mod4942.useEdgeInsetApplication;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4938.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4938.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = _modDef4961;
export const Tabs = TabsHostDefault;