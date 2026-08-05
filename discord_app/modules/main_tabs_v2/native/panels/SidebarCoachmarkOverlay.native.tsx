// discord_app/modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import { useInitialValue } from "../../../../hooks/useInitialValue.tsx";

let StyleSheet;
let c5;
let error;
let metroImportAll;
const require = arg1;
function SidebarCoachmarkOverlayLayer(manager) {
  manager = manager.manager;
  let closure_1;
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
    children: items1.map((children) => callback(React.Fragment, { children: children.component }, children.key))
  });
}
let c4 = importAllResult;
({ StyleSheet, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const context = importAllResult.createContext(null);
let obj = { overlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj[0] = obj;
const styles = StyleSheet.create(obj);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = function SidebarCoachmarkOverlay(enabled) {
  enabled = enabled.enabled;
  const tmp = useInitialValue(() => {
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
  return closure_8(context.Provider, obj);
};