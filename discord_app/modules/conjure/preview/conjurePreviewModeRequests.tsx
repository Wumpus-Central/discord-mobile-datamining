// === Module 10949: conjurePreviewModeRequests ===

// Module 10949 (conjurePreviewModeRequests)
import noop from "module_19" /* 19 */;

const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModeRequests.tsx");

export function requestConjurePreviewMode(arg0, widget) {
  for (const item10007 of set) {
    let item10007Result = item10007(arg0, arg1);
    continue;
  }
}
export function useConjurePreviewModeRequests(projectId, current) {
  noop = projectId;
  closure_2 = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [projectId];
  const effect = noop.useEffect(() => {
    if (null != listener) {
      listener = function listener(arg0, AUTO_DISMISS) {
        if (arg0 === listener) {
          ref.current(AUTO_DISMISS);
        }
      };
      current.add(listener);
      return () => {
        set.delete(listener);
      };
    }
  }, items);
}