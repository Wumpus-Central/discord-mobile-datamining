// _runtime/04676_enableScreens.js
import isNativePlatformSupported from "04679_isNativePlatformSupported.js";
import Animated from "04680_Animated.js";
import AnimatedDefault from "04680_Animated.js";
import isSearchBarAvailableForCurrentPlatform from "04688_isSearchBarAvailableForCurrentPlatform.js";
import get_controlledBottomTabs from "04689_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04691_ScreenStackHeaderSubview.js";
import context from "04692_context.js";
import _modDef4696 from "metro/04696__.js";
import ScreenContainerDefault from "04698_ScreenContainer.js";
import ScreenStackDefault from "04700_ScreenStack.js";
import _modDef4703 from "metro/04703__.js";
import ScreenContentWrapperDefault from "04705_ScreenContentWrapper.js";
import ScreenFooterDefault from "04707_ScreenFooter.js";
import FullWindowOverlayDefault from "04709_FullWindowOverlay.js";
import useTransitionProgressDefault from "04711_useTransitionProgress.js";
import TabsHostDefault from "04712_TabsHost.js";
import RNSModule from "04677_RNSModule.js";

for (const key10015 in require("metro/04678__.js")) {
  let tmp3 = key10015;
  arg5[key10015] = require("metro/04678__.js")[key10015];
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
export const SearchBar = _modDef4696;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4703;
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