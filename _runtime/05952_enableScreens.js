// _runtime/05952_enableScreens.js
import get_synchronousScreenUpdatesEnabled from "05959_get_synchronousScreenUpdatesEnabled.js";
import _mod5968 from "metro/05968__.js";
import _mod5969 from "metro/05969__.js";
import _mod5976 from "metro/05976__.js";
import ScreenStackHeaderSubview from "05978_ScreenStackHeaderSubview.js";
import SearchBarDefault from "05983_SearchBar.js";
import ScreenContainerDefault from "05985_ScreenContainer.js";
import ScreenStackDefault from "05987_ScreenStack.js";
import _modDef5991 from "metro/05991__.js";
import ScreenContentWrapperDefault from "05994_ScreenContentWrapper.js";
import ScreenFooterDefault from "05998_ScreenFooter.js";
import FullWindowOverlayDefault from "06000_FullWindowOverlay.js";
import _modDef6002 from "metro/06002__.js";
import RNSModule from "05953_RNSModule.js";

const require = globalThis.__r;
const _modDef5969 = _mod5969;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5968.enableScreens;
export const enableFreeze = _mod5968.enableFreeze;
export const screensEnabled = _mod5968.screensEnabled;
export const freezeEnabled = _mod5968.freezeEnabled;
export const Screen = _modDef5969;
export const InnerScreen = _mod5969.InnerScreen;
export const ScreenContext = _mod5969.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef5991;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5976.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5976.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef6002;
