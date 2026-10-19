// discord_app/modules/conjure/identity/useConjureAppIdentityDraft.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import useConjureAppIdentityDefault from "useConjureAppIdentity.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentityDraft.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureAppIdentityDraft(arg0) {
      _require = arg0;
      const cResult = require("c").c(21);
      const tmp2 = useConjureAppIdentityDefault(arg0);
      if (cResult[0] !== arg0) {
        const fn = function c() {
          const result = ConjureActionCreators.refreshPreviewApplication(closure_0);
          result.catch(() => {});
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(tmp3, tmp4);
      const obj = require("c");
      [tmp7, tmp8] = noop.useState(null);
      importDefault = tmp8;
      const tmp6 = _slicedToArray(noop.useState(null), 2);
      [str, tmp10] = noop.useState(null);
      dependencyMap = tmp10;
      if (cResult[3] !== str) {
        const trimmed = str.trim();
        cResult[3] = str;
        cResult[4] = trimmed;
        let tmp11 = trimmed;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp2.description) {
        if (cResult[6] === tmp11) {
          let tmp13 = cResult[7];
        }
        if (cResult[8] !== tmp7) {
          if (null != tmp7) {
            const obj2 = { icon: tmp7 };
            let obj3 = obj2;
          } else {
            obj3 = {};
          }
          cResult[8] = tmp7;
          cResult[9] = obj3;
        } else if (cResult[10] !== tmp13) {
          if (null != tmp13) {
            const obj4 = { description: tmp13 };
            let obj5 = obj4;
          } else {
            obj5 = {};
          }
          cResult[10] = tmp13;
          cResult[11] = obj5;
        } else {
          if (cResult[12] === tmp15) {
            if (cResult[13] === tmp17) {
              let tmp19 = cResult[14];
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor() {
                  tmp = closure_1(null);
                  tmp2 = closure_2(null);
                  return;
                }
              }
              cResult[15] = E;
            } else {
              class E {
                constructor() {
                  tmp = closure_1(null);
                  tmp2 = closure_2(null);
                  return;
                }
              }
            }
            if (tmp7 == null) {
              class E {
                constructor() {
                  tmp = closure_1(null);
                  tmp2 = closure_2(null);
                  return;
                }
              }
            }
            if (cResult[16] === tmp19) {
              class E {
                constructor() {
                  tmp = closure_1(null);
                  tmp2 = closure_2(null);
                  return;
                }
              }
            }
            const obj6 = {
              iconURL: tmp7,
              setIcon: tmp8,
              description: str,
              setDescription: tmp10,
              changes: tmp19,
              changed: null != tmp7 || null != tmp13,
              commit: E,
            };
            cResult[16] = tmp19;
            cResult[17] = str;
            cResult[18] = tmp7;
            cResult[19] = null != tmp7 || null != tmp13;
            cResult[20] = obj6;
          }
          const obj7 = {};
          const merged = Object.assign(tmp15);
          const merged1 = Object.assign(tmp17);
          cResult[12] = tmp15;
          cResult[13] = cResult[11];
          cResult[14] = obj7;
          tmp19 = obj7;
        }
      }
      if (tmp11 !== str2.trim()) {
        class E {
          constructor() {
            tmp = closure_1(null);
            tmp2 = closure_2(null);
            return;
          }
        }
      }
      cResult[5] = tmp2.description;
      cResult[6] = tmp11;
      cResult[7] = null;
      tmp13 = tmp14;
      str2 = tmp2.description;
      const tmp9 = _slicedToArray(noop.useState(null), 2);
    }
  : function useConjureAppIdentityDraft(arg0) {
      closure_0 = arg0;
      const tmp = first(11673)(arg0);
      const items = [arg0];
      const effect = trimmed.useEffect(() => {
        const result = ConjureActionCreators.refreshPreviewApplication(closure_0);
        result.catch(() => {});
      }, items);
      const tmp3 = _slicedToArray(trimmed.useState(null), 2);
      first = tmp3[0];
      dependencyMap = tmp5;
      [str, tmp7] = trimmed.useState(null);
      _slicedToArray = tmp7;
      trimmed = str.trim();
      let tmp9 = null;
      if (trimmed !== str2.trim()) {
        tmp9 = trimmed;
      }
      trimmed = tmp9;
      const items1 = [first, tmp9];
      const memo = obj.useMemo(() => {
        if (null != first) {
          const obj2 = { icon: tmp };
          let obj = obj2;
        } else {
          obj = {};
        }
        const merged = Object.assign(obj);
        if (null != trimmed) {
          const obj4 = { description: tmp3 };
          let obj5 = obj4;
        } else {
          obj5 = {};
        }
        const merged1 = Object.assign(obj5);
        return {};
      }, items1);
      let iconURL = first;
      const callback = obj.useCallback(() => {
        closure_2(null);
        tmp7(null);
      }, []);
      if (first == null) {
        iconURL = tmp.iconURL;
      }
      return {
        iconURL,
        setIcon: tmp3[1],
        description: str,
        setDescription: tmp7,
        changes: memo,
        changed: null != first || null != tmp9,
        commit: callback,
      };
    };
