// === Module 6845: LayerScope ===

// Module 6845 (LayerScope)
import c from "c" /* 576 */;
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import LayerContext from "LayerContext" /* 6846 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  _slicedToArray = undefined;
  const context = noop.useContext(zIndex(6846).LayerContext);
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
    children: items1.map((children) => closure_1_8(React.Fragment, { children: children.component }, children.key))
  });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = ReactCompilerGating.isReactCompilerEnabled() ? (function LayerScope(arg0) {
  const cResult = c.c(7);
  ({ children, zIndex } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const layerContextManager = new LayerContext.LayerContextManager();
      return layerContextManager;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useInitialValueDefault(first);
  if (cResult[1] !== zIndex) {
    const obj2 = { zIndex };
    const tmp9 = closure_1_8(Layer, obj2);
    cResult[1] = zIndex;
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === children) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp6) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj3 = { value: tmp5, children: null };
  const items = [children, tmp6];
  obj3.children = items;
  const tmp11 = options(LayerContext.LayerContext.Provider, obj3);
  cResult[3] = children;
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function LayerScope(arg0) {
  ({ children, zIndex } = arg0);
  const obj = {
    value: useInitialValueDefault(() => {
      const layerContextManager = new LayerContext.LayerContextManager();
      return layerContextManager;
    }),
    children: null
  };
  const items = [children, closure_1_8(Layer, { zIndex })];
  obj.children = items;
  return options(LayerContext.LayerContext.Provider, obj);
});