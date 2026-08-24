// === Module 4676: enableScreens ===

// Module 4676 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4679 */;
import Animated from "Animated" /* 4680 */;
import AnimatedDefault from "Animated" /* 4680 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4688 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4689 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4691 */;
import context from "context" /* 4692 */;
import _modDef4696 from "module_4696" /* 4696 */;
import ScreenContainerDefault from "ScreenContainer" /* 4698 */;
import ScreenStackDefault from "ScreenStack" /* 4700 */;
import _modDef4703 from "module_4703" /* 4703 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4705 */;
import ScreenFooterDefault from "ScreenFooter" /* 4707 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4709 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4711 */;
import TabsHostDefault from "TabsHost" /* 4712 */;
import RNSModule from "RNSModule" /* 4677 */;

for (const key10015 in require("module_4678")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4678")[key10015];
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