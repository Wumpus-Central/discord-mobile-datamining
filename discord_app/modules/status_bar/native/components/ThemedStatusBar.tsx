// discord_app/modules/status_bar/native/components/ThemedStatusBar.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import shared from "../../../../design/shared.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import StatusBarDefault from "StatusBar.android.tsx";
import useGlobalStatusIndicatorState from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = initialize;
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: "light-content" };
    return jsx(StatusBarDefault, { barStyle: "light-content" });
  } else if (isModalOpen) {
    let str2 = "dark-content";
    if (stateFromStores1) {
      str2 = "light-content";
    }
  } else {
    if (!globalStatusIndicatorState.isVisible) {
      let str = "dark-content";
    }
    str = "light-content";
  }
}
