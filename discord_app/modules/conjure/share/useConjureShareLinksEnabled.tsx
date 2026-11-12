// === Module 13226: useConjureShareLinksEnabled ===

// Module 13226 (useConjureShareLinksEnabled)
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function readShareLinksEnabled() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = async function _readShareLinksEnabled(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp6;
          closure_130_0 = undefined;
          c4 = 1;
          const obj3 = ConjureActionCreators;
          c3 = 2;
          c5 = 1;
          const obj6 = { value: obj3.getProject(closure_0, closure_1, ConjureActionCreators.currentSession()), done: false };
          return obj6;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_130_0 = value;
        let tmp9 = null;
        if (closure_130_0.ok) {
          tmp9 = true === closure_130_0.body.share_links_enabled;
        }
        c4 = 0;
        c5 = 3;
        const obj = { value: tmp9, done: true };
        return obj;
      }
    } catch (tmp16) {
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp16;
      } else {
        c3 = tmp;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useConjureShareLinksEnabled.tsx");

export default function useConjureShareLinksEnabled(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp[1];
  [tmp3, _slicedToArray] = noop.useState(false);
  const setShareLinksEnabled = noop.useCallback((arg0) => {
    closure_1(arg0);
    _slicedToArray(false);
  }, []);
  items = [arg0, setShareLinksEnabled];
  const effect = noop.useEffect(() => {
    closure_1 = async function _load() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              v1 = 1;
              v3 = 1;
              const obj4 = { value: readShareLinksEnabled(closure_0, signal.signal), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (closure_129_0.signal.aborted) {
              v3 = 3;
            } else if (null != closure_128_0) {
              v3(closure_128_0);
            }
            v1(true);
          }
        } catch (tmp23) {
          v3 = tmp;
          throw tmp23;
        }
      }
    };
    const abortController = new AbortController();
    (function load() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => abortController.abort();
  }, items);
  const items1 = [arg0, setShareLinksEnabled];
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  return {
    shareLinksEnabled: tmp[0],
    loadFailed: tmp3,
    setShareLinksEnabled,
    reload: noop.useCallback(setShareLinksEnabled(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: readShareLinksEnabled(closure_0), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (null == closure_128_0) {
              closure_129_2(true);
            } else {
              closure_129_3(closure_128_0);
            }
            c3 = 3;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    }), items1)
  };
};