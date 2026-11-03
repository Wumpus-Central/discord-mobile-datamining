// === Module 6090: ? ===

// Module 6090
import RNSLog2 from "RNSLog" /* 6091 */;
import _mod6095 from "module_6095" /* 6095 */;
import _modDef6096 from "module_6096" /* 6096 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["android", "ios"];
let closure_4 = ["children", "direction", "nativeContainerStyle", "onTabSelected", "navStateRequest"];
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const fillParent = StyleSheet.create({ fillParent: { flex: 1, width: "100%", height: "100%" } });

export default function TabsHost(arg0) {
  const RNSLog = RNSLog2.RNSLog;
  RNSLog.log("TabsHost render");
  ({ android, ios } = arg0);
  const tmp2 = _objectWithoutProperties(arg0, closure_3);
  const nativeContainerStyle = tmp2.nativeContainerStyle;
  ({ children, direction, onTabSelected, navStateRequest } = tmp2);
  const ref = noop.useRef(null);
  const tmp3 = _objectWithoutProperties(tmp2, closure_4);
  const obj2 = { style: null, navStateRequest, onTabSelected: _mod6095.useTabsHost({ componentNodeRef: ref, onTabSelected }).onTabSelected, nativeContainerBackgroundColor: null, ref: null };
  items = [fillParent.fillParent, { direction }];
  obj2.style = items;
  let backgroundColor;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  obj2.nativeContainerBackgroundColor = backgroundColor;
  obj2.ref = ref;
  const merged = Object.assign(tmp3);
  let prop;
  if (android != null) {
    prop = android.tabBarRespectsIMEInsets;
  }
  obj2.tabBarRespectsIMEInsets = prop;
  obj2.children = children;
  return jsx(_modDef6096, { style: null, navStateRequest, onTabSelected: _mod6095.useTabsHost({ componentNodeRef: ref, onTabSelected }).onTabSelected, nativeContainerBackgroundColor: null, ref: null });
};