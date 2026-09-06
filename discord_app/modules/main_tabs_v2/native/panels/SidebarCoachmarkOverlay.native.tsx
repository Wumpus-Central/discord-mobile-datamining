// discord_app/modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import LayerContext from "../../../../design/components/Layers/native/LayerContext.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SidebarCoachmarkOverlayLayer(manager) {
  manager = manager.manager;
  closure_1 = _slicedToArray(noop.useState({}), 2)[1];
  const items = [manager];
  const effect = noop.useEffect(() => {
    closure_0 = manager;
    manager.invalidate = () => closure_1_1({});
    return () => {
      closure_0.invalidate = () => null;
    };
  }, items);
  const obj = {
    style: overlay.overlay,
    ref(current) {
      return manager.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: null,
  };
  const items1 = manager.items;
  obj.children = items1.map((children) => closure_1_7(React.Fragment, { children: children.component }, children.key));
  return closure_7(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const context = noop.createContext(null);
let obj = { overlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj.overlay = obj;
const overlay = StyleSheet.create(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = function SidebarCoachmarkOverlay(enabled) {
  enabled = enabled.enabled;
  const tmp = useInitialValueDefault(() => {
    const layerContextManager = new LayerContext.LayerContextManager();
    return layerContextManager;
  });
  let tmp3 = null;
  if (enabled) {
    tmp3 = tmp;
  }
  let obj = { value: tmp3, children: null };
  const items = [enabled.children];
  let tmp4 = null;
  if (enabled) {
    obj = { manager: tmp };
    tmp4 = React5(SidebarCoachmarkOverlayLayer, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return React6(context.Provider, obj);
};
