// === Module 13830: useResettingValue ===

// Module 13830 (useResettingValue)
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

const require = fn;
const noop = fn(19);
({ useState: closure_4, useCallback: hasOwnProperty, useEffect: metroRequire } = noop);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useResettingValue.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useResettingValue(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(11);
  const obj = require("c");
  [tmp4, dependencyMap] = closure_4(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const timeout = new closure_0(2060).Timeout();
      return timeout;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  _slicedToArray = tmp6;
  if (cResult[1] !== tmp6) {
    const fn2 = function b() {
      return () => closure_1_3.stop();
    };
    const items = [tmp6];
    cResult[1] = tmp6;
    cResult[2] = fn2;
    cResult[3] = items;
    let tmp8 = items;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  closure_6(tmp7, tmp8);
  if (cResult[4] === arg1) {
    if (cResult[5] === arg0) {
      if (cResult[6] === tmp6) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp4) {
          let tmp11 = cResult[10];
        }
        return tmp11;
      }
      const items1 = [tmp4, tmp10];
      cResult[8] = tmp10;
      cResult[9] = tmp4;
      cResult[10] = items1;
      tmp11 = items1;
    }
  }
  const fn3 = function h(arg0) {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => dependencyMap(closure_1_0));
    }
  };
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = tmp6;
  cResult[7] = fn3;
  tmp10 = fn3;
  const tmp3 = _slicedToArray(closure_4(arg0), 2);
}) : (function useResettingValue(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = _slicedToArray(closure_4(arg0), 2);
  dependencyMap = tmp[1];
  const tmp2 = useInitialValueDefault(() => {
    const timeout = new closure_0(2060).Timeout();
    return timeout;
  });
  _slicedToArray = tmp2;
  const items = [tmp2];
  closure_6(() => () => closure_1_3.stop(), items);
  const items1 = [tmp[0], ];
  const items2 = [arg1, arg0, tmp2];
  items1[1] = closure_5((arg0) => {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => dependencyMap(closure_1_0));
    }
  }, items2);
  return items1;
});