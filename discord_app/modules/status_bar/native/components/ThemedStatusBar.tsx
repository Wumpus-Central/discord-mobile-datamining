// === Module 14577: ThemedStatusBar ===

// Module 14577 (ThemedStatusBar)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import coerceMainRoute from "coerceMainRoute" /* 4417 */;
import componentDidMountDefault from "componentDidMount" /* 9481 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 9679 */;
import closure_3 from "handleThemeChange" /* 1183 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  const obj2 = coerceMainRoute;
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[6]).isThemeDark(theme.theme));
  const obj3 = initialize;
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: null };
    obj[0] = "light-content";
    return jsx(componentDidMountDefault, { barStyle: null });
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