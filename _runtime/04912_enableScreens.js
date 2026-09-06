// _runtime/04912_enableScreens.js
import _mod4915 from "metro/04915__.js";
import _mod4916 from "metro/04916__.js";
import _mod4924 from "metro/04924__.js";
import get_controlledBottomTabs from "04925_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04927_ScreenStackHeaderSubview.js";
import _mod4928 from "metro/04928__.js";
import _modDef4932 from "metro/04932__.js";
import ScreenContainerDefault from "04934_ScreenContainer.js";
import ScreenStackDefault from "04936_ScreenStack.js";
import _modDef4939 from "metro/04939__.js";
import ScreenContentWrapperDefault from "04941_ScreenContentWrapper.js";
import ScreenFooterDefault from "04943_ScreenFooter.js";
import FullWindowOverlayDefault from "04945_FullWindowOverlay.js";
import _modDef4947 from "metro/04947__.js";
import TabsHostDefault from "04948_TabsHost.js";
import RNSModule from "04913_RNSModule.js";

const _modDef4916 = _mod4916;

for (const key10015 in require("metro/04914__.js")) {
  arg5[key10015] = require("metro/04914__.js")[key10015];
  continue;
}

export const enableScreens = _mod4915.enableScreens;
export const enableFreeze = _mod4915.enableFreeze;
export const screensEnabled = _mod4915.screensEnabled;
export const freezeEnabled = _mod4915.freezeEnabled;
export const Screen = _modDef4916;
export const InnerScreen = _mod4916.InnerScreen;
export const ScreenContext = _mod4916.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = _modDef4932;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4939;
export const EdgeInsetApplicationContext = _mod4928.EdgeInsetApplicationContext;
export const useEdgeInsetApplication = _mod4928.useEdgeInsetApplication;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4924.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4924.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = _modDef4947;
export const Tabs = TabsHostDefault;
