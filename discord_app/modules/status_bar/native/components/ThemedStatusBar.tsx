// === Module 15697: ThemedStatusBar ===

// Module 15697 (ThemedStatusBar)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4801 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import StatusBarDefault from "StatusBar" /* 10481 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 10731 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    const obj5 = { barStyle: "light-content" };
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
};