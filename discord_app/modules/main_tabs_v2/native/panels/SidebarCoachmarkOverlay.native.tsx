// discord_app/modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import LayerContext from "../../../../design/components/Layers/native/LayerContext.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const context = noop.createContext(null);
fn(558);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SidebarCoachmarkOverlayLayer(manager) {
      const cResult = items(576).c(14);
      items = manager.manager;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp3 = _slicedToArray(noop.useState(first), 2)[1];
      closure_1 = tmp3;
      if (cResult[1] === tmp3) {
        if (cResult[2] === items) {
          let tmp4 = cResult[3];
        }
        if (cResult[4] !== items) {
          const items1 = [items];
          cResult[4] = items;
          cResult[5] = items1;
          let tmp5 = items1;
        } else {
          tmp5 = cResult[5];
        }
        const effect = noop.useEffect(tmp4, tmp5);
        if (cResult[6] !== items) {
          const fn2 = function h(current) {
            return items.setSurfaceRef(current);
          };
          cResult[6] = items;
          cResult[7] = fn2;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[7];
        }
        if (cResult[8] !== items.items) {
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function _(children) {
              return closure_1_7(React.Fragment, { children: children.component }, children.key);
            };
            cResult[10] = fn3;
            let tmp9 = fn3;
          } else {
            tmp9 = cResult[10];
          }
          const items2 = items.items;
          const mapped = items2.map(tmp9);
          items = items.items;
          cResult[8] = items;
          cResult[9] = mapped;
        } else {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp8) {
              let tmp12 = cResult[13];
            }
            return tmp12;
          }
          const obj4 = {
            style: closure_11.overlay,
            ref: tmp7,
            onLayout: NOOP,
            pointerEvents: "box-none",
            children: cResult[9],
          };
          const tmp17 = closure_7(closure_5, obj4);
          cResult[11] = tmp7;
          cResult[12] = cResult[9];
          cResult[13] = tmp17;
          tmp12 = tmp17;
        }
      }
      const fn = function y() {
        closure_0 = items;
        items.invalidate = () => closure_1_1({});
        return () => {
          closure_0.invalidate = () => null;
        };
      };
      cResult[1] = tmp3;
      cResult[2] = items;
      cResult[3] = fn;
      tmp4 = fn;
      const obj = items(576);
    }
  : function SidebarCoachmarkOverlayLayer(manager) {
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
        style: closure_11.overlay,
        ref(current) {
          return manager.setSurfaceRef(current);
        },
        onLayout: NOOP,
        pointerEvents: "box-none",
        children: null,
      };
      const items1 = manager.items;
      obj.children = items1.map((children) =>
        closure_1_7(React.Fragment, { children: children.component }, children.key),
      );
      return closure_7(closure_5, obj);
    };
let obj = { overlay: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.zIndex = 1;
obj.overlay = obj4;
const styles = StyleSheet.create(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = ReactCompilerGating.isReactCompilerEnabled()
  ? function SidebarCoachmarkOverlay(arg0) {
      const cResult = c.c(8);
      ({ children, enabled } = arg0);
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
      const tmp4 = useInitialValueDefault(first);
      let tmp5 = null;
      if (enabled) {
        tmp5 = tmp4;
      }
      if (cResult[1] === enabled) {
        if (cResult[2] === tmp4) {
          let tmp6 = cResult[3];
        }
        if (cResult[4] === children) {
          if (cResult[5] === tmp5) {
            if (cResult[6] === tmp6) {
              let tmp10 = cResult[7];
            }
            return tmp10;
          }
        }
        const obj2 = { value: tmp5, children: null };
        const items = [children, tmp6];
        obj2.children = items;
        const tmp13 = closure_1_8(context.Provider, obj2);
        cResult[4] = children;
        cResult[5] = tmp5;
        cResult[6] = tmp6;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      let tmp7 = null;
      if (enabled) {
        const obj3 = { manager: tmp4 };
        tmp7 = React5(closure_10, obj3);
      }
      cResult[1] = enabled;
      cResult[2] = tmp4;
      cResult[3] = tmp7;
      tmp6 = tmp7;
    }
  : function SidebarCoachmarkOverlay(enabled) {
      enabled = enabled.enabled;
      const tmp = useInitialValueDefault(() => {
        const layerContextManager = new LayerContext.LayerContextManager();
        return layerContextManager;
      });
      let tmp3 = null;
      if (enabled) {
        tmp3 = tmp;
      }
      const obj = { value: tmp3, children: null };
      const items = [enabled.children];
      let tmp4 = null;
      if (enabled) {
        const obj2 = { manager: tmp };
        tmp4 = React5(closure_10, obj2);
      }
      items[1] = tmp4;
      obj.children = items;
      return closure_1_8(context.Provider, obj);
    };
