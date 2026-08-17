// discord_app/design/components/Layers/native/LayerScope.native.tsx
import useInitialValueDefault from "useInitialValue" /* 7127 */;
import add from "add" /* 7128 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NOOP } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  let context;
  dependencyMap = undefined;
  let callback;
  context = React.useContext(zIndex(7128).LayerContext);
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
    children: items1.map((children) => callback(React.Fragment, { children: children.component }, children.key))
  });
}
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const result = require("set").fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

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