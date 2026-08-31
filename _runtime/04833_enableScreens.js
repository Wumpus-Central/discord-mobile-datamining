// === Module 4833: enableScreens ===

// Module 4833 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4836 */;
import Animated from "Animated" /* 4837 */;
import AnimatedDefault from "Animated" /* 4837 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4845 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4846 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4848 */;
import context from "context" /* 4849 */;
import _modDef4853 from "module_4853" /* 4853 */;
import ScreenContainerDefault from "ScreenContainer" /* 4855 */;
import ScreenStackDefault from "ScreenStack" /* 4857 */;
import _modDef4860 from "module_4860" /* 4860 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4862 */;
import ScreenFooterDefault from "ScreenFooter" /* 4864 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4866 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4868 */;
import TabsHostDefault from "TabsHost" /* 4869 */;
import RNSModule from "RNSModule" /* 4834 */;

for (const key10015 in require("module_4835")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4835")[key10015];
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
export const SearchBar = _modDef4853;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4860;
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