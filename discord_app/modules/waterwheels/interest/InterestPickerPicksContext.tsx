// === Module 19442: InterestPickerPicksContext ===

// Module 19442 (InterestPickerPicksContext)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function InterestPickerPicksProvider(children) {
  const cResult = c.c(4);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  noop.useRef(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      getPicks() {
          const items = [...closure_0.current];
          return items;
        },
      setPicks(arg0) {
          const items = [...arg0];
          closure_0.current = items;
        }
    };
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== children) {
    const obj3 = { value: tmp3, children };
    const tmp7 = <redux.Provider value={tmp3}>{children}</redux.Provider>;
    cResult[2] = children;
    cResult[3] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[3];
  }
  return tmp4;
}) : (function InterestPickerPicksProvider(children) {
  closure_0 = noop.useRef([]);
  return <redux.Provider value={noop.useMemo(() => ({
    getPicks() {
      const items = [...closure_1_0.current];
      return items;
    },
    setPicks(arg0) {
      const items = [...arg0];
      ref.current = items;
    }
  }), [])}>{children.children}</redux.Provider>;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default tmp2;
export const useInterestPickerPicks = ReactCompilerGating.isReactCompilerEnabled() ? (function useInterestPickerPicks() {
  const context = noop.useContext(closure_5);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}) : (function useInterestPickerPicks() {
  const context = noop.useContext(closure_5);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
});