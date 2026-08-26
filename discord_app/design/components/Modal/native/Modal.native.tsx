// === Module 11569: Modal ===

// Module 11569 (Modal)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 5439 */;
import NavigationStack from "NavigationStack" /* 5955 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: NAV_BAR_HEIGHT.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  obj.headerStyle = obj;
  return jsx(NavigationStack.Navigator, { height: NAV_BAR_HEIGHT.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top });
};