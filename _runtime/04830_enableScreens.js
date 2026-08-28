// === Module 4830: enableScreens ===

// Module 4830 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4833 */;
import Animated from "Animated" /* 4834 */;
import AnimatedDefault from "Animated" /* 4834 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4842 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4843 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4845 */;
import context from "context" /* 4846 */;
import _modDef4850 from "module_4850" /* 4850 */;
import ScreenContainerDefault from "ScreenContainer" /* 4852 */;
import ScreenStackDefault from "ScreenStack" /* 4854 */;
import _modDef4857 from "module_4857" /* 4857 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4859 */;
import ScreenFooterDefault from "ScreenFooter" /* 4861 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4863 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4865 */;
import TabsHostDefault from "TabsHost" /* 4866 */;
import RNSModule from "RNSModule" /* 4831 */;

for (const key10015 in require("module_4832")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4832")[key10015];
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
export const SearchBar = _modDef4850;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4857;
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