// discord_app/design/components/Layers/native/LayerScope.native.tsx
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import LayerContext from "LayerContext.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  _slicedToArray = undefined;
  const context = noop.useContext(zIndex(7157).LayerContext);
  dependencyMap = _slicedToArray(noop.useState({}), 2)[1];
  _slicedToArray = noop.useRef(null);
  const items = [context];
  const effect = noop.useEffect(() => {
    context.invalidate = () => closure_1_2({});
    return () => {
      context.invalidate = () => null;
    };
  }, items);
  const items1 = context.items;
  const items2 = [zIndex];
  return closure_8(closure_5, {
    style: noop.useMemo(() => {
      const obj = {};
      const merged = Object.assign(absoluteFillObject.absoluteFillObject);
      obj.zIndex = zIndex;
      return obj;
    }, items2),
    ref(current) {
      closure_3.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => closure_1_8(React.Fragment, { children: children.component }, children.key)),
  });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = function LayerScope(arg0) {
  ({ children, zIndex } = arg0);
  const obj = {
    value: useInitialValueDefault(() => {
      const layerContextManager = new LayerContext.LayerContextManager();
      return layerContextManager;
    }),
    children: null,
  };
  const items = [children, React6(Layer, { zIndex })];
  obj.children = items;
  return React7(LayerContext.LayerContext.Provider, obj);
};
