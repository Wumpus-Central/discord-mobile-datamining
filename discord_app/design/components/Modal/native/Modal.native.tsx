// discord_app/design/components/Modal/native/Modal.native.tsx
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import NavigatorHeader from "../../Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../Navigator/native/Navigator.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
