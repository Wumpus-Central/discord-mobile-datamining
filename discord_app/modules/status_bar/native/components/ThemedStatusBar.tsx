// discord_app/modules/status_bar/native/components/ThemedStatusBar.tsx
import "noop";
import handleThemeChange from "handleThemeChange";
import fetchFingerprint from "fetchFingerprint";
import { jsx } from "jsxProd";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useGlobalStatusIndicatorState } from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import { coerceMainRoute } from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import { componentDidMount } from "StatusBar.android.tsx";

const require = arg1;
const result = require("fetchFingerprint").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = initialize;
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  const obj2 = coerceMainRoute;
  const items1 = [handleThemeChange];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[6]).isThemeDark(theme.theme));
  const obj3 = initialize;
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: null };
    obj[0] = "light-content";
    return jsx(componentDidMount, { barStyle: null });
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