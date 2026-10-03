// === Module 12698: useApplicationWidgetRefresh ===

// Module 12698 (useApplicationWidgetRefresh)
import refreshApplicationWidget from "refreshApplicationWidget" /* 12699 */;
import presentApplicationWidgetRefreshOutcomeDefault from "presentApplicationWidgetRefreshOutcome" /* 12700 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetRefresh.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  [pending, dependencyMap] = noop.useState(false);
  _slicedToArray = noop.useRef(true);
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
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === arg0) {
    if (cResult[3] === pending) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === pending) {
      if (cResult[6] === tmp7) {
        let tmp8 = cResult[7];
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
    let tmp = first;
    if (!first) {
      tmp = null == closure_0;
    }
    if (!tmp) {
      closure_2(true);
      const result = refreshApplicationWidget.refreshApplicationWidget(closure_0);
      result.then(presentApplicationWidgetRefreshOutcomeDefault).finally(() => {
        if (ref.current) {
          closure_1_2(false);
        }
      });
      const nextPromise = result.then(presentApplicationWidgetRefreshOutcomeDefault);
    }
  };
  cResult[2] = arg0;
  cResult[3] = pending;
  cResult[4] = fn2;
  tmp7 = fn2;
  let obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  [pending, closure_2] = noop.useState(false);
  _slicedToArray = noop.useRef(true);
  const effect = noop.useEffect(() => {
    closure_3.current = true;
    return () => {
      closure_1_3.current = false;
    };
  }, []);
  const items = [arg0, pending];
  return {
    pending,
    refresh: noop.useCallback(() => {
      let tmp = first;
      if (!first) {
        tmp = null == closure_0;
      }
      if (!tmp) {
        closure_2(true);
        const result = refreshApplicationWidget.refreshApplicationWidget(closure_0);
        result.then(presentApplicationWidgetRefreshOutcomeDefault).finally(() => {
          if (ref.current) {
            closure_1_2(false);
          }
        });
        const nextPromise = result.then(presentApplicationWidgetRefreshOutcomeDefault);
      }
    }, items)
  };
});