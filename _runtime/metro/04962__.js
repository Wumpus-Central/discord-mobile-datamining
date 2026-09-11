// _runtime/metro/04962__.js
import RNSLog2 from "../04963_RNSLog.js";
import _mod4967 from "04967__.js";
import _modDef4968 from "04968__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

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
  let obj = _mod4967;
  obj = {
    style: null,
    navStateRequest,
    onTabSelected: obj.useTabsHost({ componentNodeRef: ref, onTabSelected }).onTabSelected,
    nativeContainerBackgroundColor: null,
    ref: null,
  };
  const items = [fillParent.fillParent, { direction }];
  obj.style = items;
  let backgroundColor;
  const tmp3 = _objectWithoutProperties(tmp2, closure_4);
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  obj.nativeContainerBackgroundColor = backgroundColor;
  obj.ref = ref;
  const merged = Object.assign(tmp3);
  let prop;
  if (android != null) {
    prop = android.tabBarRespectsIMEInsets;
  }
  obj.tabBarRespectsIMEInsets = prop;
  obj.children = children;
  return jsx(_modDef4968, {
    style: null,
    navStateRequest,
    onTabSelected: obj.useTabsHost({ componentNodeRef: ref, onTabSelected }).onTabSelected,
    nativeContainerBackgroundColor: null,
    ref: null,
  });
}
