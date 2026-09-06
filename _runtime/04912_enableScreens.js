// _runtime/04912_enableScreens.js
import isNativePlatformSupported from "04915_isNativePlatformSupported.js";
import Animated from "04916_Animated.js";
import AnimatedDefault from "04916_Animated.js";
import isSearchBarAvailableForCurrentPlatform from "04924_isSearchBarAvailableForCurrentPlatform.js";
import get_controlledBottomTabs from "04925_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04927_ScreenStackHeaderSubview.js";
import context from "04928_context.js";
import _modDef4932 from "metro/04932__.js";
import ScreenContainerDefault from "04934_ScreenContainer.js";
import ScreenStackDefault from "04936_ScreenStack.js";
import _modDef4939 from "metro/04939__.js";
import ScreenContentWrapperDefault from "04941_ScreenContentWrapper.js";
import ScreenFooterDefault from "04943_ScreenFooter.js";
import FullWindowOverlayDefault from "04945_FullWindowOverlay.js";
import useTransitionProgressDefault from "04947_useTransitionProgress.js";
import TabsHostDefault from "04948_TabsHost.js";
import RNSModule from "04913_RNSModule.js";

for (const key10015 in require("metro/04914__.js")) {
  let tmp3 = key10015;
  arg5[key10015] = require("metro/04914__.js")[key10015];
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
export const isSearchBarAvailableForCurrentPlatform =
  isSearchBarAvailableForCurrentPlatform.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = isSearchBarAvailableForCurrentPlatform.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
export const Tabs = TabsHostDefault;
