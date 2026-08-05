// discord_app/modules/status_bar/native/components/ThemedStatusBar.tsx
import "noop";
import handleThemeChange from "handleThemeChange";
import fetchFingerprint from "fetchFingerprint";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("fetchFingerprint").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = require("../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */.useIsModalOpen();
  const obj2 = require("../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */;
  const items1 = [handleThemeChange];
  const stateFromStores1 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => callback(table[6]).isThemeDark(theme.theme));
  const obj3 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const globalStatusIndicatorState = require("../../../connectivity/native/useGlobalStatusIndicatorState.tsx") /* useGlobalStatusIndicatorState */.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: null };
    obj[0] = "light-content";
    return jsx(require("StatusBar.android.tsx"), { barStyle: null });
  } else if (isModalOpen) {
    let str2 = "dark-content";
    if (stateFromStores1) {
      str2 = "light-content";
    }
    let str = str2;
  } else {
    if (!globalStatusIndicatorState.isVisible) {
      str = "dark-content";
    }
    str = "light-content";
  }
};