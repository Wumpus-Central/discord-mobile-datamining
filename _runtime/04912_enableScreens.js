// === Module 4912: enableScreens ===

// Module 4912 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4915 */;
import Animated from "Animated" /* 4916 */;
import AnimatedDefault from "Animated" /* 4916 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4924 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4925 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4927 */;
import context from "context" /* 4928 */;
import _modDef4932 from "module_4932" /* 4932 */;
import ScreenContainerDefault from "ScreenContainer" /* 4934 */;
import ScreenStackDefault from "ScreenStack" /* 4936 */;
import _modDef4939 from "module_4939" /* 4939 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4941 */;
import ScreenFooterDefault from "ScreenFooter" /* 4943 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4945 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4947 */;
import TabsHostDefault from "TabsHost" /* 4948 */;
import RNSModule from "RNSModule" /* 4913 */;

for (const key10015 in require("module_4914")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4914")[key10015];
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
export const SearchBar = _modDef4932;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4939;
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