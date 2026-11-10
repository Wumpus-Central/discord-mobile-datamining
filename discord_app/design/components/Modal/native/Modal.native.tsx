// === Module 11636: Modal ===

// Module 11636 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorHeader from "NavigatorHeader" /* 7067 */;
import Navigator from "Navigator" /* 7234 */;
import NavigatorBackgroundContext from "NavigatorBackgroundContext" /* 7236 */;
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