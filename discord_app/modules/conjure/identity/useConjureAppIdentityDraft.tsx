// === Module 11635: useConjureAppIdentityDraft ===

// Module 11635 (useConjureAppIdentityDraft)
import c from "c" /* 576 */;
import useConjureAppIdentityDefault from "useConjureAppIdentity" /* 11636 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentityDraft.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppIdentityDraft(arg0) {
  const cResult = c.c(18);
  const tmp2 = useConjureAppIdentityDefault(arg0);
  [tmp4, tmp5] = noop.useState(null);
  const require = tmp5;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  [str, tmp7] = noop.useState(null);
  importDefault = tmp7;
  if (cResult[0] !== str) {
    const trimmed = str.trim();
    cResult[0] = str;
    cResult[1] = trimmed;
    let tmp8 = trimmed;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp2.description) {
    if (cResult[3] === tmp8) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      if (null != tmp4) {
        const obj2 = { icon: tmp4 };
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      cResult[5] = tmp4;
      cResult[6] = obj3;
    } else if (cResult[7] !== tmp10) {
      if (null != tmp10) {
        const obj4 = { description: tmp10 };
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      cResult[7] = tmp10;
      cResult[8] = obj5;
    } else {
      if (cResult[9] === tmp12) {
        if (cResult[10] === tmp14) {
          let tmp16 = cResult[11];
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              tmp = closure_0(null);
              tmp2 = closure_1(null);
              return;
            }
          }
          cResult[12] = U;
        } else {
          class U {
            constructor() {
              tmp = closure_0(null);
              tmp2 = closure_1(null);
              return;
            }
          }
        }
        if (tmp4 == null) {
          class U {
            constructor() {
              tmp = closure_0(null);
              tmp2 = closure_1(null);
              return;
            }
          }
        }
        if (cResult[13] === tmp16) {
          class U {
            constructor() {
              tmp = closure_0(null);
              tmp2 = closure_1(null);
              return;
            }
          }
        }
        const obj6 = { iconURL: tmp4, setIcon: tmp5, description: str, setDescription: tmp7, changes: tmp16, changed: null != tmp4 || null != tmp10, commit: U };
        cResult[13] = tmp16;
        cResult[14] = str;
        cResult[15] = tmp4;
        cResult[16] = null != tmp4 || null != tmp10;
        cResult[17] = obj6;
      }
      const obj7 = {};
      const merged = Object.assign(tmp12);
      const merged1 = Object.assign(tmp14);
      cResult[9] = tmp12;
      cResult[10] = cResult[8];
      cResult[11] = obj7;
      tmp16 = obj7;
    }
  }
  if (tmp8 !== str2.trim()) {
    class U {
      constructor() {
        tmp = closure_0(null);
        tmp2 = closure_1(null);
        return;
      }
    }
  }
  cResult[2] = tmp2.description;
  cResult[3] = tmp8;
  cResult[4] = null;
  tmp10 = tmp11;
  str2 = tmp2.description;
  const tmp6 = _slicedToArray(noop.useState(null), 2);
}) : (function useConjureAppIdentityDraft(arg0) {
  const tmp = useConjureAppIdentityDefault(arg0);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  const first = tmp2[0];
  closure_1 = tmp4;
  [str, tmp6] = noop.useState(null);
  dependencyMap = tmp6;
  let trimmed = str.trim();
  let tmp8 = null;
  if (trimmed !== str2.trim()) {
    tmp8 = trimmed;
  }
  trimmed = tmp8;
  const items = [first, tmp8];
  const memo = noop.useMemo(() => {
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
  }, items);
  let iconURL = first;
  const callback = noop.useCallback(() => {
    closure_1(null);
    tmp6(null);
  }, []);
  if (first == null) {
    iconURL = tmp.iconURL;
  }
  return { iconURL, setIcon: tmp2[1], description: str, setDescription: tmp6, changes: memo, changed: null != first || null != tmp8, commit: callback };
});