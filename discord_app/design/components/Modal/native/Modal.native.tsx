// === Module 11670: Modal ===

// Module 11670 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5722 */;
import Navigator from "Navigator" /* 7306 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export function Modal(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = useSafeAreaInsetsDefault();
  obj.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  return jsx(Navigator.Navigator, {});
}