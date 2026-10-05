// === Module 16148: SidebarCoachmarkOverlay ===

// Module 16148 (SidebarCoachmarkOverlay)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import LayerContext from "LayerContext" /* 6652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let manager;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
({ StyleSheet, View: hasOwnProperty } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const context = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let enabled;
  let first;
  let items;
  const obj = react2;
  const cResult = obj.c(8);
  ({ children, enabled } = arg0);
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
  const tmp4 = useInitialValueDefault(first);
  let tmp5 = null;
  if (enabled) {
    tmp5 = tmp4;
  }
  if (cResult[1] === enabled) {
    let tmp6;
    if (cResult[2] === tmp4) {
      tmp6 = cResult[3];
    }
    if (cResult[4] === children) {
      if (cResult[5] === tmp5) {
        let tmp10;
        if (cResult[6] === tmp6) {
          tmp10 = cResult[7];
        }
        return tmp10;
      }
    }
    const obj2 = { value: tmp5, children: items };
    items = [children, tmp6];
    const tmp13 = metroImportAll(context.Provider, obj2);
    cResult[4] = children;
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  let tmp7 = null;
  if (enabled) {
    const obj3 = { manager: tmp4 };
    tmp7 = metroImportDefault(closure_10, obj3);
  }
  cResult[1] = enabled;
  cResult[2] = tmp4;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((enabled) => {
  let items;
  enabled = enabled.enabled;
  const children = enabled.children;
  const tmp = useInitialValueDefault(() => {
    const layerContextManager = new LayerContext.LayerContextManager();
    return layerContextManager;
  });
  let tmp3 = null;
  const Provider = context.Provider;
  if (enabled) {
    tmp3 = tmp;
  }
  const obj = { value: tmp3, children: items };
  items = [children, ];
  let tmp4 = null;
  if (enabled) {
    const obj2 = { manager: tmp };
    tmp4 = metroImportDefault(closure_10, obj2);
  }
  items[1] = tmp4;
  return metroImportAll(Provider, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((manager) => {
  let first;
  let obj = manager(576);
  const cResult = obj.c(14);
  manager = manager.manager;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp3 = _slicedToArray(react.useState(first), 2)[1];
  let closure_1 = tmp3;
  if (cResult[1] === tmp3) {
    let tmp4;
    let tmp5;
    let tmp7;
    let tmp8;
    if (cResult[2] === manager) {
      tmp4 = cResult[3];
    }
    if (cResult[4] !== manager) {
      const items = [manager];
      cResult[4] = manager;
      cResult[5] = items;
      tmp5 = items;
    } else {
      tmp5 = cResult[5];
    }
    const effect = react.useEffect(tmp4, tmp5);
    if (cResult[6] !== manager) {
      const fn2 = function h(current) {
        return manager.setSurfaceRef(current);
      };
      cResult[6] = manager;
      cResult[7] = fn2;
      tmp7 = fn2;
    } else {
      tmp7 = cResult[7];
    }
    if (cResult[8] !== manager.items) {
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function p(children) {
          const obj = { children: children.component };
          return closure_1_7(React.Fragment, obj, children.key);
        };
        cResult[10] = fn3;
        tmp9 = fn3;
      } else {
        tmp9 = cResult[10];
      }
      const items1 = manager.items;
      const mapped = items1.map(tmp9);
      cResult[8] = manager.items;
      cResult[9] = mapped;
      tmp8 = mapped;
    } else {
      tmp8 = cResult[9];
    }
    if (cResult[11] === tmp7) {
      let tmp11;
      if (cResult[12] === tmp8) {
        tmp11 = cResult[13];
      }
      return tmp11;
    }
    const obj4 = { style: closure_11.overlay, ref: tmp7, onLayout: NOOP, pointerEvents: "box-none", children: tmp8 };
    const tmp16 = closure_7(closure_5, obj4);
    cResult[11] = tmp7;
    cResult[12] = tmp8;
    cResult[13] = tmp16;
    tmp11 = tmp16;
  }
  const fn = function f() {
    let closure_0 = manager;
    manager.invalidate = () => closure_1_1({});
    return () => {
      closure_0.invalidate = () => null;
    };
  };
  cResult[1] = tmp3;
  cResult[2] = manager;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((manager) => {
  let items1;
  manager = manager.manager;
  let closure_1 = _slicedToArray(react.useState({}), 2)[1];
  const items = [manager];
  const effect = react.useEffect(() => {
    let closure_0 = manager;
    manager.invalidate = () => closure_1_1({});
    return () => {
      closure_0.invalidate = () => null;
    };
  }, items);
  let obj = {
    style: closure_11.overlay,
    ref(current) {
      return manager.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => {
      const obj = { children: children.component };
      return closure_1_7(React.Fragment, obj, children.key);
    })
  };
  items1 = manager.items;
  return closure_7(closure_5, obj);
});
let obj = { overlay: obj2 };
obj2 = { zIndex: 1 };
const create = StyleSheet.create;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = create(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = tmp5;