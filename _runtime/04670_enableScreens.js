// === Module 4670: enableScreens ===

// Module 4670 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4673 */;
import Animated from "Animated" /* 4674 */;
import AnimatedDefault from "Animated" /* 4674 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4682 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4683 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4685 */;
import context from "context" /* 4686 */;
import _modDef4690 from "module_4690" /* 4690 */;
import ScreenContainerDefault from "ScreenContainer" /* 4692 */;
import ScreenStackDefault from "ScreenStack" /* 4694 */;
import _modDef4697 from "module_4697" /* 4697 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4699 */;
import ScreenFooterDefault from "ScreenFooter" /* 4701 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4703 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4705 */;
import TabsHostDefault from "TabsHost" /* 4706 */;
import RNSModule from "RNSModule" /* 4671 */;

for (const key10015 in require("module_4672")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4672")[key10015];
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