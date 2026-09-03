// === Module 11729: Modal ===

// Module 11729 (Modal)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 5501 */;
import NavigationStack from "NavigationStack" /* 6017 */;
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