// === Module 6651: LayerScope ===

// Module 6651 (LayerScope)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import LayerContext from "LayerContext" /* 6652 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
function Layer(zIndex) {
  let closure_2;
  let closure_3;
  zIndex = zIndex.zIndex;
  _slicedToArray = undefined;
  const context = react.useContext(zIndex(6652).LayerContext);
  dependencyMap = _slicedToArray(react.useState({}), 2)[1];
  _slicedToArray = react.useRef(null);
  const items = [context];
  const effect = react.useEffect(() => {
    context.invalidate = () => closure_1_2({});
    return () => {
      context.invalidate = () => null;
    };
  }, items);
  const items1 = context.items;
  const items2 = [zIndex];
  let obj = {
    style: react.useMemo(() => {
      const obj = { zIndex };
      const merged = Object.assign(metroRequire.absoluteFillObject);
      return obj;
    }, items2),
    ref(current) {
      closure_3.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => {
      const obj = { children: children.component };
      return closure_1_8(React.Fragment, obj, children.key);
    })
  };
  return closure_8(closure_5, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let first;
  let items;
  let tmp6;
  let zIndex;
  const obj = react2;
  const cResult = obj.c(7);
  ({ children, zIndex } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const layerContextManager = new LayerContext.LayerContextManager();
      return layerContextManager;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useInitialValueDefault(first);
  if (cResult[1] !== zIndex) {
    const obj2 = { zIndex };
    const tmp9 = metroImportAll(Layer, obj2);
    cResult[1] = zIndex;
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === children) {
    if (cResult[4] === tmp5) {
      let tmp10;
      if (cResult[5] === tmp6) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj3 = { value: tmp5, children: items };
  items = [children, tmp6];
  const tmp11 = React4(LayerContext.LayerContext.Provider, obj3);
  cResult[3] = children;
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let children;
  let items;
  let zIndex;
  ({ children, zIndex } = arg0);
  const obj = {
    value: useInitialValueDefault(() => {
      const layerContextManager = new LayerContext.LayerContextManager();
      return layerContextManager;
    }),
    children: items
  };
  items = [children, ];
  const Provider = LayerContext.LayerContext.Provider;
  items[1] = metroImportAll(Layer, { zIndex });
  return React4(Provider, obj);
});
const result = size.fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = tmp4;