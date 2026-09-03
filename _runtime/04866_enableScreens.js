// _runtime/04866_enableScreens.js
import isNativePlatformSupported from "04869_isNativePlatformSupported.js";
import Animated from "04870_Animated.js";
import AnimatedDefault from "04870_Animated.js";
import isSearchBarAvailableForCurrentPlatform from "04878_isSearchBarAvailableForCurrentPlatform.js";
import get_controlledBottomTabs from "04879_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04881_ScreenStackHeaderSubview.js";
import context from "04882_context.js";
import _modDef4886 from "metro/04886__.js";
import ScreenContainerDefault from "04888_ScreenContainer.js";
import ScreenStackDefault from "04890_ScreenStack.js";
import _modDef4893 from "metro/04893__.js";
import ScreenContentWrapperDefault from "04895_ScreenContentWrapper.js";
import ScreenFooterDefault from "04897_ScreenFooter.js";
import FullWindowOverlayDefault from "04899_FullWindowOverlay.js";
import useTransitionProgressDefault from "04901_useTransitionProgress.js";
import TabsHostDefault from "04902_TabsHost.js";
import RNSModule from "04867_RNSModule.js";

for (const key10015 in require("metro/04868__.js")) {
  let tmp3 = key10015;
  arg5[key10015] = require("metro/04868__.js")[key10015];
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
export const isSearchBarAvailableForCurrentPlatform =
  isSearchBarAvailableForCurrentPlatform.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = isSearchBarAvailableForCurrentPlatform.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
export const Tabs = TabsHostDefault;
