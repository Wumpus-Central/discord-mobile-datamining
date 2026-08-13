// _runtime/04691_enableScreens.js
import RNSModule from "RNSModule";

for (const key10015 in require("module_4693")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4693")[key10015];
  continue;
}

export const enableScreens = require("isNativePlatformSupported").enableScreens;
export const enableFreeze = require("isNativePlatformSupported").enableFreeze;
export const screensEnabled = require("isNativePlatformSupported").screensEnabled;
export const freezeEnabled = require("isNativePlatformSupported").freezeEnabled;
export const Screen = require("Animated");
export const InnerScreen = require("Animated").InnerScreen;
export const ScreenContext = require("Animated").ScreenContext;
export const ScreenStackHeaderConfig = require("ScreenStackHeaderSubview").ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = require("ScreenStackHeaderSubview").ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = require("ScreenStackHeaderSubview").ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = require("ScreenStackHeaderSubview").ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = require("ScreenStackHeaderSubview").ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = require("ScreenStackHeaderSubview").ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = require("ScreenStackHeaderSubview").ScreenStackHeaderSearchBarView;
export const SearchBar = require("module_4711");
export const ScreenContainer = require("ScreenContainer");
export const ScreenStack = require("ScreenStack");
export const ScreenStackItem = require("module_4718");
export const EdgeInsetApplicationContext = require("context").EdgeInsetApplicationContext;
export const useEdgeInsetApplication = require("context").useEdgeInsetApplication;
export const FullWindowOverlay = require("FullWindowOverlay");
export const ScreenFooter = require("ScreenFooter");
export const ScreenContentWrapper = require("ScreenContentWrapper");
export const isSearchBarAvailableForCurrentPlatform = require("isSearchBarAvailableForCurrentPlatform").isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = require("isSearchBarAvailableForCurrentPlatform").executeNativeBackPress;
export const compatibilityFlags = require("get controlledBottomTabs").compatibilityFlags;
export const featureFlags = require("get controlledBottomTabs").featureFlags;
export const useTransitionProgress = require("useTransitionProgress");
export const Tabs = require("TabsHost");