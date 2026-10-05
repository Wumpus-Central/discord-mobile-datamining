// === Module 13367: useResettingValue ===

// Module 13367 (useResettingValue)
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useState: closure_4, useCallback: hasOwnProperty, useEffect: metroRequire } = react);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let closure_3;
  let first;
  let tmp4;
  let tmp7;
  let tmp8;
  _require = arg0;
  importDefault = arg1;
  const obj = require("react");
  const cResult = obj.c(11);
  [tmp4, dependencyMap] = closure_4(arg0);
  _slicedToArray(closure_4(arg0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const timeout = new closure_0(dependencyMap[4]).Timeout();
      return timeout;
    };
    cResult[0] = fn;
    first = fn;
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
    tmp8 = items;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  closure_6(tmp7, tmp8);
  if (cResult[4] === arg1) {
    if (cResult[5] === arg0) {
      let tmp10;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        let tmp11;
        if (cResult[9] === tmp4) {
          tmp11 = cResult[10];
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
  const fn3 = function k(arg0) {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => closure_1_2(closure_1_0));
    }
  };
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = tmp6;
  cResult[7] = fn3;
  tmp10 = fn3;
}) : ((arg0, arg1) => {
  let closure_1;
  let closure_2;
  let closure_3;
  let first;
  let closure_0 = arg0;
  importDefault = arg1;
  [first, dependencyMap] = closure_4(arg0);
  const tmp3 = useInitialValueDefault(() => {
    const timeout = new closure_0(closure_2[4]).Timeout();
    return timeout;
  });
  _slicedToArray = tmp3;
  const items = [tmp3];
  closure_6(() => () => closure_1_3.stop(), items);
  const items1 = [first, ];
  const items2 = [arg1, arg0, tmp3];
  items1[1] = closure_5((arg0) => {
    closure_2(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => closure_1_2(closure_1_0));
    }
  }, items2);
  return items1;
});
const result = size.fileFinishedImporting("hooks/useResettingValue.tsx");

export default tmp3;