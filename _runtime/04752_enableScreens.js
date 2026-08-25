// === Module 4752: enableScreens ===

// Module 4752 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4755 */;
import Animated from "Animated" /* 4756 */;
import AnimatedDefault from "Animated" /* 4756 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4764 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4765 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4767 */;
import context from "context" /* 4768 */;
import _modDef4772 from "module_4772" /* 4772 */;
import ScreenContainerDefault from "ScreenContainer" /* 4774 */;
import ScreenStackDefault from "ScreenStack" /* 4776 */;
import _modDef4779 from "module_4779" /* 4779 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4781 */;
import ScreenFooterDefault from "ScreenFooter" /* 4783 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4785 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4787 */;
import TabsHostDefault from "TabsHost" /* 4788 */;
import RNSModule from "RNSModule" /* 4753 */;

for (const key10015 in require("module_4754")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4754")[key10015];
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
export const SearchBar = _modDef4772;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4779;
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