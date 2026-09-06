// === Module 4912: enableScreens ===

// Module 4912 (enableScreens)
import _mod4915 from "module_4915" /* 4915 */;
import _mod4916 from "module_4916" /* 4916 */;
import _mod4924 from "module_4924" /* 4924 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4925 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4927 */;
import _mod4928 from "module_4928" /* 4928 */;
import _modDef4932 from "module_4932" /* 4932 */;
import ScreenContainerDefault from "ScreenContainer" /* 4934 */;
import ScreenStackDefault from "ScreenStack" /* 4936 */;
import _modDef4939 from "module_4939" /* 4939 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4941 */;
import ScreenFooterDefault from "ScreenFooter" /* 4943 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4945 */;
import _modDef4947 from "module_4947" /* 4947 */;
import TabsHostDefault from "TabsHost" /* 4948 */;
import RNSModule from "RNSModule" /* 4913 */;

const _modDef4916 = _mod4916;

for (const key10015 in require("module_4914")) {
  arg5[key10015] = require("module_4914")[key10015];
  continue;
}

export const enableScreens = _mod4915.enableScreens;
export const enableFreeze = _mod4915.enableFreeze;
export const screensEnabled = _mod4915.screensEnabled;
export const freezeEnabled = _mod4915.freezeEnabled;
export const Screen = _modDef4916;
export const InnerScreen = _mod4916.InnerScreen;
export const ScreenContext = _mod4916.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = _modDef4932;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4939;
export const EdgeInsetApplicationContext = _mod4928.EdgeInsetApplicationContext;
export const useEdgeInsetApplication = _mod4928.useEdgeInsetApplication;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4924.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4924.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = _modDef4947;
export const Tabs = TabsHostDefault;