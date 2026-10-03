// === Module 10432: useGiftOptionsSyncDebounce ===

// Module 10432 (useGiftOptionsSyncDebounce)
import _modDef12 from "module_12" /* 12 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/hooks/useGiftOptionsSyncDebounce.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(16);
  importDefault = noop.useRef(null);
  dependencyMap = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  noop = obj2.useRef(first);
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return _modDef12.debounce(() => {
        closure_1_2.current = ref.current;
        closure_1_0((arg0) => arg0 + 1);
      }, 500);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
  }
  const tmp5 = useInitialValueDefault(tmp4);
  closure_4 = tmp5;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(arg0) {
      closure_3.current = [];
      for (const item10008 of tmp) {
        let item10008Result = item10008(arg0);
        continue;
      }
    };
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  closure_5 = tmp6;
  if (cResult[4] !== tmp5) {
    const fn3 = function y() {
      return () => {
        closure_1_4.cancel();
        closure_1_5(false);
      };
    };
    const items1 = [tmp5, tmp6];
    cResult[4] = tmp5;
    cResult[5] = fn3;
    cResult[6] = items1;
    let tmp8 = items1;
    let tmp7 = fn3;
  } else {
    tmp7 = cResult[5];
    tmp8 = cResult[6];
  }
  const effect = obj2.useEffect(tmp7, tmp8);
  if (cResult[7] !== tmp5) {
    const fn4 = function _(current) {
      closure_1.current = current;
      let flag = ref.current !== current;
      if (flag) {
        closure_4();
        flag = true;
      }
      return flag;
    };
    cResult[7] = tmp5;
    cResult[8] = fn4;
    let tmp10 = fn4;
  } else {
    tmp10 = cResult[8];
  }
  if (cResult[9] !== tmp5) {
    const fn5 = function w(current) {
      closure_4.cancel();
      closure_2.current = current;
    };
    cResult[9] = tmp5;
    cResult[10] = fn5;
    let tmp11 = fn5;
  } else {
    tmp11 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        promise = new Promise((arg0) => {
          const current = ref.current;
          return current.push(arg0);
        });
        return promise;
      }
    }
    cResult[11] = R;
  } else {
    class R {
      constructor() {
        promise = new Promise((arg0) => {
          const current = ref.current;
          return current.push(arg0);
        });
        return promise;
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_3.current.length > 0;
      }
    }
    cResult[12] = C;
  } else {
    class C {
      constructor() {
        return closure_3.current.length > 0;
      }
    }
  }
  if (cResult[13] === tmp11) {
    class C {
      constructor() {
        return closure_3.current.length > 0;
      }
    }
    return obj3;
  }
  obj3 = { waitForPause: tmp10, flush: tmp11, waitForSync: R, resolveSyncs: tmp6, isAwaitingSync: C };
  cResult[13] = tmp11;
  cResult[14] = tmp10;
  cResult[15] = obj3;
  const obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  importDefault = noop.useRef(null);
  dependencyMap = noop.useRef(null);
  noop = noop.useRef([]);
  const tmp = useInitialValueDefault(() => _modDef12.debounce(() => {
    closure_1_2.current = ref.current;
    closure_1_0((arg0) => arg0 + 1);
  }, 500));
  closure_4 = tmp;
  const resolveSyncs = noop.useCallback((arg0) => {
    closure_3.current = [];
    for (const item10008 of tmp) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [tmp, resolveSyncs];
  const effect = noop.useEffect(() => () => {
    closure_1_4.cancel();
    resolveSyncs(false);
  }, items);
  const items1 = [tmp];
  const items2 = [tmp];
  const callback1 = noop.useCallback((current) => {
    closure_1.current = current;
    let flag = ref.current !== current;
    if (flag) {
      closure_4();
      flag = true;
    }
    return flag;
  }, items1);
  const callback2 = noop.useCallback((current) => {
    closure_4.cancel();
    closure_2.current = current;
  }, items2);
  const callback3 = noop.useCallback(() => new Promise((arg0) => {
    const current = ref.current;
    return current.push(arg0);
  }), []);
  return { waitForPause: callback1, flush: callback2, waitForSync: callback3, resolveSyncs, isAwaitingSync: noop.useCallback(() => ref2.current.length > 0, []) };
});