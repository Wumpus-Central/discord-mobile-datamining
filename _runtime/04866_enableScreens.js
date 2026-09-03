// === Module 4866: enableScreens ===

// Module 4866 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4869 */;
import Animated from "Animated" /* 4870 */;
import AnimatedDefault from "Animated" /* 4870 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4878 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4879 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4881 */;
import context from "context" /* 4882 */;
import _modDef4886 from "module_4886" /* 4886 */;
import ScreenContainerDefault from "ScreenContainer" /* 4888 */;
import ScreenStackDefault from "ScreenStack" /* 4890 */;
import _modDef4893 from "module_4893" /* 4893 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4895 */;
import ScreenFooterDefault from "ScreenFooter" /* 4897 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4899 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4901 */;
import TabsHostDefault from "TabsHost" /* 4902 */;
import RNSModule from "RNSModule" /* 4867 */;

for (const key10015 in require("module_4868")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4868")[key10015];
  continue;
}

export const enableScreens = isNativePlatformSupported.enableScreens;
export const enableFreeze = isNativePlatformSupported.enableFreeze;
export const screensEnabled = isNativePlatformSupported.screensEnabled;
export const freezeEnabled = isNativePlatformSupported.freezeEnabled;
export const Screen = AnimatedDefault;
export const InnerScreen = Animated.InnerScreen;
export const ScreenContext = Animated.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = _modDef4886;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4893;
export const EdgeInsetApplicationContext = context.EdgeInsetApplicationContext;
export const useEdgeInsetApplication = context.useEdgeInsetApplication;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = isSearchBarAvailableForCurrentPlatform.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = isSearchBarAvailableForCurrentPlatform.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
export const Tabs = TabsHostDefault;