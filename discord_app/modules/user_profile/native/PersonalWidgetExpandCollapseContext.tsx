// discord_app/modules/user_profile/native/PersonalWidgetExpandCollapseContext.tsx
import c from "../../../../_runtime/00576_c.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext({
  isAnyFieldClipped: false,
  isExpanded: false,
  setAnyFieldClipped() {},
  setIsExpanded() {},
});
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let obj = {
  isAnyFieldClipped: false,
  isExpanded: false,
  setAnyFieldClipped() {},
  setIsExpanded() {},
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PersonalWidgetExpandCollapseProvider(arg0) {
      const cResult = c.c(10);
      [tmp4, tmp5] = noop.useState(false);
      const tmp3 = _slicedToArray(noop.useState(false), 2);
      [tmp7, require] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
          return new Set();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const first1 = _slicedToArray(noop.useState(first), 1)[0];
      if (cResult[1] !== first1) {
        class S {
          constructor(arg0, arg1) {
            obj = closure_1;
            if (arg1) {
              addResult = obj.add(arg0);
              tmp2 = obj;
            } else {
              deleteResult = obj.delete(arg0);
              tmp2 = obj;
            }
            tmp4 = closure_0(tmp2.size > 0);
            return;
          }
        }
        cResult[1] = first1;
        cResult[2] = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            obj = closure_1;
            if (arg1) {
              addResult = obj.add(arg0);
              tmp2 = obj;
            } else {
              deleteResult = obj.delete(arg0);
              tmp2 = obj;
            }
            tmp4 = closure_0(tmp2.size > 0);
            return;
          }
        }
      }
      if (cResult[3] === tmp7) {
        class S {
          constructor(arg0, arg1) {
            obj = closure_1;
            if (arg1) {
              addResult = obj.add(arg0);
              tmp2 = obj;
            } else {
              deleteResult = obj.delete(arg0);
              tmp2 = obj;
            }
            tmp4 = closure_0(tmp2.size > 0);
            return;
          }
        }
      }
      cResult[3] = tmp7;
      cResult[4] = tmp4;
      cResult[5] = S;
      cResult[6] = { isExpanded: tmp4, setIsExpanded: tmp5, isAnyFieldClipped: tmp7, setAnyFieldClipped: S };
      const obj3 = { isExpanded: tmp4, setIsExpanded: tmp5, isAnyFieldClipped: tmp7, setAnyFieldClipped: S };
      const tmp6 = _slicedToArray(noop.useState(false), 2);
    }
  : function PersonalWidgetExpandCollapseProvider(children) {
      isExpanded = undefined;
      setIsExpanded = undefined;
      first1 = undefined;
      closure_3 = undefined;
      [isExpanded, setIsExpanded] = noop.useState(false);
      [first1, closure_3] = noop.useState(false);
      const first2 = _slicedToArray(
        noop.useState(() => new Set()),
        1,
      )[0];
      const items = [first2];
      const setAnyFieldClipped = noop.useCallback((arg0, arg1) => {
        if (arg1) {
          first2.add(arg0);
          let tmp2 = first2;
        } else {
          first2.delete(arg0);
          tmp2 = first2;
        }
        closure_3(tmp2.size > 0);
      }, items);
      const items1 = [isExpanded, first1, setAnyFieldClipped];
      return (
        <redux.Provider
          value={noop.useMemo(
            () => ({ isExpanded, setIsExpanded, isAnyFieldClipped: first1, setAnyFieldClipped }),
            items1,
          )}
        >
          {children.children}
        </redux.Provider>
      );
    };
function usePersonalWidgetExpandCollapse() {
  return noop.useContext(closure_5);
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_profile/native/PersonalWidgetExpandCollapseContext.tsx");

export const PersonalWidgetExpandCollapseProvider = tmp2;
export { usePersonalWidgetExpandCollapse };
export const usePersonalWidgetFieldClamp = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePersonalWidgetFieldClamp(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const cResult = c.c(13);
      const context = noop.useContext(closure_5);
      const setAnyFieldClipped = context.setAnyFieldClipped;
      const id = noop.useId();
      [first, closure_5] = noop.useState(null);
      if (cResult[0] === id) {
        if (cResult[1] === arg0) {
          if (cResult[2] === first) {
            if (cResult[3] === setAnyFieldClipped) {
              if (cResult[4] === arg1) {
                let tmp6 = cResult[5];
              }
              if (cResult[6] === id) {
                if (cResult[7] === setAnyFieldClipped) {
                  let tmp7 = cResult[8];
                  let tmp8 = cResult[9];
                }
                const effect = noop.useEffect(tmp7, tmp8);
                class F {
                  constructor() {
                    return () => setAnyFieldClipped(id, false);
                  }
                }
                if (cResult[10] === tmp6) {
                  if (cResult[11] === tmp10) {
                    let tmp11 = cResult[12];
                  }
                  return tmp11;
                }
                const obj3 = { onTextLayout: tmp6, lineClamp: tmp10 };
                cResult[10] = tmp6;
                cResult[11] = tmp10;
                cResult[12] = obj3;
                tmp11 = obj3;
              }
              class F {
                constructor() {
                  return () => setAnyFieldClipped(id, false);
                }
              }
              const items = [id, setAnyFieldClipped];
              cResult[6] = id;
              cResult[7] = setAnyFieldClipped;
              cResult[8] = F;
              cResult[9] = items;
              tmp8 = items;
              tmp7 = F;
            }
          }
        }
      }
      const fn = function p(nativeEvent) {
        if (first !== closure_1) {
          closure_5(tmp);
          setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
        }
      };
      cResult[0] = id;
      cResult[1] = arg0;
      cResult[2] = first;
      cResult[3] = setAnyFieldClipped;
      cResult[4] = arg1;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : function usePersonalWidgetFieldClamp(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const context = noop.useContext(closure_5);
      const setAnyFieldClipped = context.setAnyFieldClipped;
      const id = noop.useId();
      [first, closure_5] = noop.useState(null);
      const items = [first, arg1, id, arg0, setAnyFieldClipped];
      const items1 = [id, setAnyFieldClipped];
      const callback = noop.useCallback((nativeEvent) => {
        if (first !== closure_1) {
          closure_5(tmp);
          setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
        }
      }, items);
      const effect = noop.useEffect(() => () => setAnyFieldClipped(id, false), items1);
      const obj = { onTextLayout: callback, lineClamp: null };
      let tmp7;
      if (first === arg1) {
        if (!context.isExpanded) {
          tmp7 = arg0;
        }
      }
      obj.lineClamp = tmp7;
      return obj;
    };
