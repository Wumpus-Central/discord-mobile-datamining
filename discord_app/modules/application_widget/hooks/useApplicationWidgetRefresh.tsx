// === Module 12698: useApplicationWidgetRefresh ===

// Module 12698 (useApplicationWidgetRefresh)
import refreshApplicationWidget from "refreshApplicationWidget" /* 12699 */;
import presentApplicationWidgetRefreshOutcomeDefault from "presentApplicationWidgetRefreshOutcome" /* 12700 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let closure_3;
  let pending;
  let tmp4;
  let tmp5;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(8);
  [pending, dependencyMap] = react.useState(false);
  _slicedToArray = react.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      closure_3.current = true;
      return () => {
        closure_1_3.current = false;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === arg0) {
    let tmp7;
    if (cResult[3] === pending) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === pending) {
      let tmp8;
      if (cResult[6] === tmp7) {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
    const obj3 = { pending, refresh: tmp7 };
    cResult[5] = pending;
    cResult[6] = tmp7;
    cResult[7] = obj3;
    tmp8 = obj3;
  }
  const fn2 = function s() {
    let ref;
    const tmp = first || null == closure_0;
    if (!tmp) {
      closure_2(true);
      const obj = refreshApplicationWidget;
      const result = obj.refreshApplicationWidget(closure_0);
      const nextPromise = result.then(presentApplicationWidgetRefreshOutcomeDefault);
      nextPromise.finally(() => {
        if (ref.current) {
          closure_1_2(false);
        }
      });
    }
  };
  cResult[2] = arg0;
  cResult[3] = pending;
  cResult[4] = fn2;
  tmp7 = fn2;
}) : ((arg0) => {
  let closure_2;
  let closure_3;
  let pending;
  let closure_0 = arg0;
  [pending, closure_2] = react.useState(false);
  _slicedToArray = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_3.current = true;
    return () => {
      closure_1_3.current = false;
    };
  }, []);
  const items = [arg0, pending];
  let obj = {
    pending,
    refresh: react.useCallback(() => {
      let ref;
      const tmp = first || null == closure_0;
      if (!tmp) {
        closure_2(true);
        const obj = refreshApplicationWidget;
        const result = obj.refreshApplicationWidget(closure_0);
        const nextPromise = result.then(presentApplicationWidgetRefreshOutcomeDefault);
        nextPromise.finally(() => {
          if (ref.current) {
            closure_1_2(false);
          }
        });
      }
    }, items)
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetRefresh.tsx");

export default tmp2;