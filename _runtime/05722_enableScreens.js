// _runtime/05722_enableScreens.js
import TabsHost from "05724_TabsHost.js";
import get_synchronousScreenUpdatesEnabled from "05729_get_synchronousScreenUpdatesEnabled.js";
import react_native from "05738_react-native.js";
import InnerScreen from "05739_InnerScreen.js";
import react_native2 from "05746_react-native.js";
import ScreenStackHeaderSubview from "05748_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05753_SearchBar.js";
import ScreenContainerDefault from "05755_ScreenContainer.js";
import ScreenStackDefault from "05757_ScreenStack.js";
import _modDef5761 from "metro/05761__.js";
import ScreenContentWrapperDefault from "05764_ScreenContentWrapper.js";
import ScreenFooterDefault from "05768_ScreenFooter.js";
import FullWindowOverlayDefault from "05770_FullWindowOverlay.js";
import useTransitionProgressDefault from "05772_useTransitionProgress.js";
import react_native3 from "05723_react-native.js";

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
export const ScreenStackItem = _modDef5761;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
