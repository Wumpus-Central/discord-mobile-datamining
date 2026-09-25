// === Module 12434: useApplicationWidgetRefresh ===

// Module 12434 (useApplicationWidgetRefresh)
import refreshApplicationWidget from "refreshApplicationWidget" /* 12435 */;
import presentApplicationWidgetRefreshOutcomeDefault from "presentApplicationWidgetRefreshOutcome" /* 12436 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetRefresh.tsx");

export default function useApplicationWidgetRefresh(arg0) {
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
};