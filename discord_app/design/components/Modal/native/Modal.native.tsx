// === Module 11923: Modal ===

// Module 11923 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import Navigator from "Navigator" /* 6972 */;
import NavigatorBackgroundContext from "NavigatorBackgroundContext" /* 6974 */;
import NavigatorHeader from "NavigatorHeader" /* 6975 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export function Modal(arg0) {
  const tmp = useSafeAreaInsetsDefault();
  const navigatorHeaderSize = NavigatorHeader.useNavigatorHeaderSize();
  const obj2 = { value: "modal", children: null };
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.headerStyle = { height: navigatorHeaderSize.height + tmp.top };
  obj2.children = jsx(Navigator.Navigator, {});
  return jsx(NavigatorBackgroundContext.NavigatorBackgroundContext.Provider, { value: "modal", children: null });
}