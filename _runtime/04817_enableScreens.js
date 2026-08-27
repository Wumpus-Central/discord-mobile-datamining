// _runtime/04817_enableScreens.js
import isNativePlatformSupported from "04820_isNativePlatformSupported.js";
import Animated from "04821_Animated.js";
import AnimatedDefault from "04821_Animated.js";
import isSearchBarAvailableForCurrentPlatform from "04829_isSearchBarAvailableForCurrentPlatform.js";
import get_controlledBottomTabs from "04830_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04832_ScreenStackHeaderSubview.js";
import context from "04833_context.js";
import _modDef4837 from "metro/04837__.js";
import ScreenContainerDefault from "04839_ScreenContainer.js";
import ScreenStackDefault from "04841_ScreenStack.js";
import _modDef4844 from "metro/04844__.js";
import ScreenContentWrapperDefault from "04846_ScreenContentWrapper.js";
import ScreenFooterDefault from "04848_ScreenFooter.js";
import FullWindowOverlayDefault from "04850_FullWindowOverlay.js";
import useTransitionProgressDefault from "04852_useTransitionProgress.js";
import TabsHostDefault from "04853_TabsHost.js";
import RNSModule from "04818_RNSModule.js";

for (const key10015 in require("metro/04819__.js")) {
  let tmp3 = key10015;
  arg5[key10015] = require("metro/04819__.js")[key10015];
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
export const SearchBar = _modDef4837;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4844;
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