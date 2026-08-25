// discord_app/design/components/Modal/native/Modal.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import NAV_BAR_HEIGHT from "../../Navigator/native/NavigatorConstants.native.tsx";
import NavigationStack from "../../Navigator/native/Navigator.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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