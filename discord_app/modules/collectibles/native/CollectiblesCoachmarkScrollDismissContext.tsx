// discord_app/modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children;

const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let obj = {
  registerDismiss() {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: "Array",
};
const redux = react.createContext(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let first;
      let tmp3;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      children = children.children;
      let closure_0 = react.useRef(null);
      let closure_1 = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(current) {
          current.current = current;
          closure_1.current = null;
          return () => {
            if (current.current === current) {
              tmp.current = null;
              ref2.current = null;
            }
          };
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(nativeEvent) {
          const current = ref.current;
          if (null != current) {
            const contentOffset = nativeEvent.nativeEvent.contentOffset;
            if (null != ref2.current) {
              const _Math = Math;
              if (Math.abs(contentOffset.x - ref2.current) >= 16) {
                tmp.current = null;
                ref2.current = null;
                current();
              }
            } else {
              ref2.current = contentOffset.x;
            }
          }
        };
        cResult[1] = fn2;
        tmp3 = fn2;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { registerDismiss: first, handleDismissCoachmarkOnScroll: tmp3 };
        cResult[2] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[2];
      }
      if (cResult[3] !== children) {
        const tmp8 = <redux.Provider value={tmp4}>{children}</redux.Provider>;
        cResult[3] = children;
        cResult[4] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[4];
      }
      return tmp5;
    }
  : (children) => {
      children = children.children;
      let closure_0 = react.useRef(null);
      let closure_1 = react.useRef(null);
      const callback = react.useCallback((current) => {
        current.current = current;
        closure_1.current = null;
        return () => {
          if (current.current === current) {
            tmp.current = null;
            ref2.current = null;
          }
        };
      }, []);
      const callback1 = react.useCallback((nativeEvent) => {
        const current = ref.current;
        if (null != current) {
          const contentOffset = nativeEvent.nativeEvent.contentOffset;
          if (null != ref2.current) {
            const _Math = Math;
            if (Math.abs(contentOffset.x - ref2.current) >= 16) {
              tmp.current = null;
              ref2.current = null;
              current();
            }
          } else {
            ref2.current = contentOffset.x;
          }
        }
      }, []);
      const items = [callback, callback1];
      return (
        <redux.Provider
          value={react.useMemo(() => ({ registerDismiss, handleDismissCoachmarkOnScroll: callback1 }), items)}
        >
          {children}
        </redux.Provider>
      );
    };
let fn = () => react.useContext(redux);
const result1 = size.fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = fn;
export const CollectiblesCoachmarkScrollDismissProvider = tmp3;
