// discord_app/design/components/Layers/native/LayerScope.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  let context;
  let dependencyMap;
  let callback;
  context = React.useContext(zIndex(5599).LayerContext);
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
      const merged = Object.assign(outer1_6.absoluteFillObject);
      obj.zIndex = zIndex;
      return obj;
    }, items2),
    ref(current) {
      _slicedToArray.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => callback(React.Fragment, { children: children.component }, children.key))
  });
}
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = function LayerScope(arg0) {
  let children;
  let zIndex;
  ({ children, zIndex } = arg0);
  const obj = {
    value: importDefault(5598)(() => {
      const layerContextManager = new callback(table[6]).LayerContextManager();
      return layerContextManager;
    }),
    children: null
  };
  const items = [children, callback2(Layer, { zIndex })];
  obj[1] = items;
  return callback3(require(5599) /* add */.LayerContext.Provider, obj);
};