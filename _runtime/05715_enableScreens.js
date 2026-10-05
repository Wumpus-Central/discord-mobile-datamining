// _runtime/05715_enableScreens.js
import TabsHost from "05717_TabsHost.js";
import get_synchronousScreenUpdatesEnabled from "05722_get_synchronousScreenUpdatesEnabled.js";
import react_native from "05731_react-native.js";
import InnerScreen from "05732_InnerScreen.js";
import react_native2 from "05739_react-native.js";
import ScreenStackHeaderSubview from "05741_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05746_SearchBar.js";
import ScreenContainerDefault from "05748_ScreenContainer.js";
import ScreenStackDefault from "05750_ScreenStack.js";
import _modDef5754 from "metro/05754__.js";
import ScreenContentWrapperDefault from "05757_ScreenContentWrapper.js";
import ScreenFooterDefault from "05761_ScreenFooter.js";
import FullWindowOverlayDefault from "05763_FullWindowOverlay.js";
import useTransitionProgressDefault from "05765_useTransitionProgress.js";
import react_native3 from "05716_react-native.js";

const InnerScreenDefault = InnerScreen;

for (const key10015 in TabsHost) {
  exports[key10015] = TabsHost[key10015];
  continue;
}
const InnerScreen_export = InnerScreen.InnerScreen;
const ScreenStackHeaderSubview_export = ScreenStackHeaderSubview.ScreenStackHeaderSubview;

export const enableScreens = react_native.enableScreens;
export const enableFreeze = react_native.enableFreeze;
export const screensEnabled = react_native.screensEnabled;
export const freezeEnabled = react_native.freezeEnabled;
export const Screen = InnerScreenDefault;
export { InnerScreen_export as InnerScreen };
export const ScreenContext = InnerScreen.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export { ScreenStackHeaderSubview_export as ScreenStackHeaderSubview };
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef5754;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
