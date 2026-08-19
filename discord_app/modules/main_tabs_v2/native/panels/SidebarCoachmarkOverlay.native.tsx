// === Module 15277: SidebarCoachmarkOverlayLayer ===

// Module 15277 (SidebarCoachmarkOverlayLayer)
import useInitialValueDefault from "useInitialValue" /* 7127 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NOOP } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
function SidebarCoachmarkOverlayLayer(manager) {
  manager = manager.manager;
  closure_1 = callback(importAllResult.useState({}), 2)[1];
  const items = [manager];
  const effect = importAllResult.useEffect(() => {
    closure_0.invalidate = () => callback({});
    return () => {
      closure_0.invalidate = () => null;
    };
  }, items);
  const items1 = manager.items;
  return callback2(closure_5, {
    style: overlay.overlay,
    ref(current) {
      return manager.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((item, index) => callback(React.Fragment, { children: item.component }, item.key))
  });
}
let c4 = importAllResult;
({ StyleSheet, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const context = importAllResult.createContext(null);
let obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj[0] = obj;
const styles = StyleSheet.create(obj);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = function SidebarCoachmarkOverlay(enabled) {
  enabled = enabled.enabled;
  const tmp = useInitialValueDefault(() => {
    const layerContextManager = new callback(table[6]).LayerContextManager();
    return layerContextManager;
  });
  let tmp3 = null;
  if (enabled) {
    tmp3 = tmp;
  }
  let obj = { value: tmp3, children: null };
  const items = [enabled.children, ];
  let tmp4 = null;
  if (enabled) {
    obj = { manager: null };
    obj[0] = tmp;
    tmp4 = callback2(SidebarCoachmarkOverlayLayer, obj);
  }
  items[1] = tmp4;
  obj[1] = items;
  return callback(context.Provider, obj);
};