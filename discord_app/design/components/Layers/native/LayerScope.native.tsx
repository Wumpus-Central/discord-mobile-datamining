// discord_app/design/components/Layers/native/LayerScope.native.tsx
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import add from "LayerContext.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOOP } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  let callback;
  const context = React.useContext(zIndex(7128).LayerContext);
  dependencyMap = callback(React.useState({}), 2)[1];
  callback = React.useRef(null);
  const items = [context];
  const effect = React.useEffect(() => {
    context.invalidate = () => callback({});
    return () => {
      closure_1.invalidate = () => null;
    };
  }, items);
  const items1 = context.items;
  const items2 = [zIndex];
  return callback2(closure_5, {
    style: React.useMemo(() => {
      const obj = {};
      const merged = Object.assign(closure_1_6.absoluteFillObject);
      obj.zIndex = zIndex;
      return obj;
    }, items2),
    ref(current) {
      closure_3.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((item, index) => callback(React.Fragment, { children: item.component }, item.key))
  });
}
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const result = require("obj132").fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = function LayerScope(arg0) {
  ({ children, zIndex } = arg0);
  const obj = {
    value: useInitialValueDefault(() => {
      const layerContextManager = new callback(table[6]).LayerContextManager();
      return layerContextManager;
    }),
    children: null
  };
  const items = [children, callback2(Layer, { zIndex })];
  obj[1] = items;
  return callback3(add.LayerContext.Provider, obj);
};