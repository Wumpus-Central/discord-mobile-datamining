// === Module 11645: Modal ===

// Module 11645 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorHeader from "NavigatorHeader" /* 7089 */;
import Navigator from "Navigator" /* 7256 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export function Modal(arg0) {
  const tmp = useSafeAreaInsetsDefault();
  const navigatorHeaderSize = NavigatorHeader.useNavigatorHeaderSize();
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.headerStyle = { height: navigatorHeaderSize.height + tmp.top };
  return jsx(Navigator.Navigator, {});
}