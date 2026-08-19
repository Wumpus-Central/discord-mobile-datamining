// === Module 13942: ThemedStatusBar ===

// Module 13942 (ThemedStatusBar)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import componentDidMountDefault from "componentDidMount" /* 8032 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 12495 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import { jsx } from "jsxProd" /* 21 */;

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