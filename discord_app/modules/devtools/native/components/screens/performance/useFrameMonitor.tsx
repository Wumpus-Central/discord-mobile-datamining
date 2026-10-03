// === Module 15610: useFrameMonitor ===

// Module 15610 (useFrameMonitor)
import startFrameMonitor from "startFrameMonitor" /* 15608 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((current) => {
  _require = current;
  const cResult = require("c").c(9);
  let obj = require("c");
  [tmp3, dependencyMap] = noop.useState(false);
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function c() {
      closure_3.current = current;
    };
    const items = [current];
    cResult[0] = current;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      current = ref.current;
      if (current != null) {
        current.stop();
      }
      ref.current = startFrameMonitor.startFrameMonitor();
      dependencyMap(true);
    };
    cResult[3] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        current = closure_2.current;
        if (null != current) {
          closure_2.current = null;
          tmp2 = closure_1;
          flag = false;
          stopResult = current.stop();
          tmp3 = closure_1(false);
          tmp4 = closure_3;
          currentResult = closure_3.current(stopResult);
        }
        return;
      }
    }
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        current = closure_2.current;
        if (null != current) {
          closure_2.current = null;
          tmp2 = closure_1;
          flag = false;
          stopResult = current.stop();
          tmp3 = closure_1(false);
          tmp4 = closure_3;
          currentResult = closure_3.current(stopResult);
        }
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        current = closure_2.current;
        if (null != current) {
          closure_2.current = null;
          tmp2 = closure_1;
          flag = false;
          stopResult = current.stop();
          tmp3 = closure_1(false);
          tmp4 = closure_3;
          currentResult = closure_3.current(stopResult);
        }
        return;
      }
    }
    const items1 = [];
    cResult[5] = tmp11;
    cResult[6] = items1;
    let tmp10 = items1;
  } else {
    class R {
      constructor() {
        current = closure_2.current;
        if (null != current) {
          closure_2.current = null;
          tmp2 = closure_1;
          flag = false;
          stopResult = current.stop();
          tmp3 = closure_1(false);
          tmp4 = closure_3;
          currentResult = closure_3.current(stopResult);
        }
        return;
      }
    }
    tmp10 = cResult[6];
  }
  const effect1 = obj2.useEffect(tmp11, tmp10);
  if (cResult[7] !== tmp3) {
    class R {
      constructor() {
        current = closure_2.current;
        if (null != current) {
          closure_2.current = null;
          tmp2 = closure_1;
          flag = false;
          stopResult = current.stop();
          tmp3 = closure_1(false);
          tmp4 = closure_3;
          currentResult = closure_3.current(stopResult);
        }
        return;
      }
    }
    tmp14[0] = tmp3;
    tmp14[1] = tmp7;
    tmp14[2] = R;
    cResult[7] = tmp3;
    cResult[8] = tmp14;
  } else {
    class R {
      constructor() {
        current = closure_2.current;
        if (null != current) {
          closure_2.current = null;
          tmp2 = closure_1;
          flag = false;
          stopResult = current.stop();
          tmp3 = closure_1(false);
          tmp4 = closure_3;
          currentResult = closure_3.current(stopResult);
        }
        return;
      }
    }
  }
  return tmp14;
}) : ((current) => {
  const monitoring = _slicedToArray(noop.useState(false), 2);
  closure_1 = monitoring[1];
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(current);
  const items = [current];
  const effect = noop.useEffect(() => {
    closure_3.current = current;
  }, items);
  const start = noop.useCallback(() => {
    current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = startFrameMonitor.startFrameMonitor();
    closure_1(true);
  }, []);
  const stop = noop.useCallback(() => {
    current = ref.current;
    if (null != current) {
      ref.current = null;
      closure_1(false);
      ref2.current(current.stop());
      const stopResult = current.stop();
    }
  }, []);
  const effect1 = noop.useEffect(() => () => {
    current = ref.current;
    if (current != null) {
      current.stop();
    }
    ref.current = null;
  }, []);
  return { monitoring: monitoring[0], start, stop };
});