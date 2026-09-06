// discord_app/design/components/Modal/native/Modal.native.tsx
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../Navigator/native/NavigatorConstants.native.tsx";
import Navigator from "../../Navigator/native/Navigator.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  obj.headerStyle = obj;
  return jsx(Navigator.Navigator, { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top });
};
