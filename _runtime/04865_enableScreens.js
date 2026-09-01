// === Module 4865: enableScreens ===

// Module 4865 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4868 */;
import Animated from "Animated" /* 4869 */;
import AnimatedDefault from "Animated" /* 4869 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4877 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4878 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4880 */;
import context from "context" /* 4881 */;
import _modDef4885 from "module_4885" /* 4885 */;
import ScreenContainerDefault from "ScreenContainer" /* 4887 */;
import ScreenStackDefault from "ScreenStack" /* 4889 */;
import _modDef4892 from "module_4892" /* 4892 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4894 */;
import ScreenFooterDefault from "ScreenFooter" /* 4896 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4898 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4900 */;
import TabsHostDefault from "TabsHost" /* 4901 */;
import RNSModule from "RNSModule" /* 4866 */;

for (const key10015 in require("module_4867")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4867")[key10015];
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
export const SearchBar = _modDef4885;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4892;
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