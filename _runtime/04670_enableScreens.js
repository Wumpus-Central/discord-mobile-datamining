// _runtime/04670_enableScreens.js
import isNativePlatformSupported from "04673_isNativePlatformSupported.js";
import Animated from "04674_Animated.js";
import AnimatedDefault from "04674_Animated.js";
import isSearchBarAvailableForCurrentPlatform from "04682_isSearchBarAvailableForCurrentPlatform.js";
import get_controlledBottomTabs from "04683_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04685_ScreenStackHeaderSubview.js";
import context from "04686_context.js";
import _modDef4690 from "metro/04690__.js";
import ScreenContainerDefault from "04692_ScreenContainer.js";
import ScreenStackDefault from "04694_ScreenStack.js";
import _modDef4697 from "metro/04697__.js";
import ScreenContentWrapperDefault from "04699_ScreenContentWrapper.js";
import ScreenFooterDefault from "04701_ScreenFooter.js";
import FullWindowOverlayDefault from "04703_FullWindowOverlay.js";
import useTransitionProgressDefault from "04705_useTransitionProgress.js";
import TabsHostDefault from "04706_TabsHost.js";
import RNSModule from "04671_RNSModule.js";

for (const key10015 in require("metro/04672__.js")) {
  arg5[key10015] = require("metro/04672__.js")[key10015];
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
export const SearchBar = _modDef4690;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4697;
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