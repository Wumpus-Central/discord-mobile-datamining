// _runtime/04926_enableScreens.js
import _mod4929 from "metro/04929__.js";
import _mod4930 from "metro/04930__.js";
import _mod4938 from "metro/04938__.js";
import get_controlledBottomTabs from "04939_get_controlledBottomTabs.js";
import ScreenStackHeaderSubview from "04941_ScreenStackHeaderSubview.js";
import _mod4942 from "metro/04942__.js";
import _modDef4946 from "metro/04946__.js";
import ScreenContainerDefault from "04948_ScreenContainer.js";
import ScreenStackDefault from "04950_ScreenStack.js";
import _modDef4953 from "metro/04953__.js";
import ScreenContentWrapperDefault from "04955_ScreenContentWrapper.js";
import ScreenFooterDefault from "04957_ScreenFooter.js";
import FullWindowOverlayDefault from "04959_FullWindowOverlay.js";
import _modDef4961 from "metro/04961__.js";
import TabsHostDefault from "04962_TabsHost.js";
import RNSModule from "04927_RNSModule.js";

const _modDef4930 = _mod4930;

for (const key10015 in require("metro/04928__.js")) {
  arg5[key10015] = require("metro/04928__.js")[key10015];
  continue;
}

export const enableScreens = _mod4929.enableScreens;
export const enableFreeze = _mod4929.enableFreeze;
export const screensEnabled = _mod4929.screensEnabled;
export const freezeEnabled = _mod4929.freezeEnabled;
export const Screen = _modDef4930;
export const InnerScreen = _mod4930.InnerScreen;
export const ScreenContext = _mod4930.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = _modDef4946;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4953;
export const EdgeInsetApplicationContext = _mod4942.EdgeInsetApplicationContext;
export const useEdgeInsetApplication = _mod4942.useEdgeInsetApplication;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4938.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4938.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = _modDef4961;
export const Tabs = TabsHostDefault;
