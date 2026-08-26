// === Module 4816: enableScreens ===

// Module 4816 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4819 */;
import Animated from "Animated" /* 4820 */;
import AnimatedDefault from "Animated" /* 4820 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4828 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4829 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4831 */;
import context from "context" /* 4832 */;
import _modDef4836 from "module_4836" /* 4836 */;
import ScreenContainerDefault from "ScreenContainer" /* 4838 */;
import ScreenStackDefault from "ScreenStack" /* 4840 */;
import _modDef4843 from "module_4843" /* 4843 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4845 */;
import ScreenFooterDefault from "ScreenFooter" /* 4847 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4849 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4851 */;
import TabsHostDefault from "TabsHost" /* 4852 */;
import RNSModule from "RNSModule" /* 4817 */;

for (const key10015 in require("module_4818")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4818")[key10015];
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
export const SearchBar = _modDef4836;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4843;
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