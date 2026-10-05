// === Module 5719: TabsHost ===

// Module 5719 (TabsHost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import RNSLog2 from "RNSLog" /* 5720 */;
import _mod5724 from "module_5724" /* 5724 */;
import _modDef5725 from "module_5725" /* 5725 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

let closure_3 = ["android", "ios"];
let closure_4 = ["children", "direction", "nativeContainerStyle", "onTabSelected", "navStateRequest"];
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const fillParent = StyleSheet.create({ fillParent: { flex: 1, width: "100%", height: "100%" } });

export default function TabsHost(arg0) {
  let android;
  let children;
  let direction;
  let ios;
  let navStateRequest;
  let onTabSelected;
  const RNSLog = RNSLog2.RNSLog;
  RNSLog.log("TabsHost render");
  ({ android, ios } = arg0);
  const tmp2 = _objectWithoutProperties(arg0, closure_3);
  const nativeContainerStyle = tmp2.nativeContainerStyle;
  ({ children, direction, onTabSelected, navStateRequest } = tmp2);
  const tmp3 = _objectWithoutProperties(tmp2, closure_4);
  const ref = react.useRef(null);
  const items = [fillParent.fillParent, { direction }];
  let backgroundColor;
  const obj = _mod5724;
  _modDef5725;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  const merged = Object.assign(tmp3);
  let prop;
  if (android != null) {
    prop = android.tabBarRespectsIMEInsets;
  }
  return <tmp6 style={items} navStateRequest={navStateRequest} onTabSelected={obj.useTabsHost({ componentNodeRef: ref, onTabSelected }).onTabSelected} nativeContainerBackgroundColor={backgroundColor} ref={ref} tabBarRespectsIMEInsets={prop}>{children}</tmp6>;
};