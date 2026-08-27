// === Module 4817: enableScreens ===

// Module 4817 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4820 */;
import Animated from "Animated" /* 4821 */;
import AnimatedDefault from "Animated" /* 4821 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4829 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4830 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4832 */;
import context from "context" /* 4833 */;
import _modDef4837 from "module_4837" /* 4837 */;
import ScreenContainerDefault from "ScreenContainer" /* 4839 */;
import ScreenStackDefault from "ScreenStack" /* 4841 */;
import _modDef4844 from "module_4844" /* 4844 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4846 */;
import ScreenFooterDefault from "ScreenFooter" /* 4848 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4850 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4852 */;
import TabsHostDefault from "TabsHost" /* 4853 */;
import RNSModule from "RNSModule" /* 4818 */;

for (const key10015 in require("module_4819")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4819")[key10015];
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