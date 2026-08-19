// discord_app/modules/status_bar/native/components/ThemedStatusBar.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import coerceMainRoute from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import componentDidMountDefault from "StatusBar.android.tsx";
import useGlobalStatusIndicatorState from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import handleThemeChange from "../../../user_settings/ThemeStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[6]).isThemeDark(theme.theme));
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: null };
    obj[0] = "light-content";
    return jsx(componentDidMountDefault, { barStyle: null });
  } else if (isModalOpen) {
  }
};