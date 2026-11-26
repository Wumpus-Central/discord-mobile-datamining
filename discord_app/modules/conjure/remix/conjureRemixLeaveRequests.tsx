// === Module 11455: conjureRemixLeaveRequests ===

// Module 11455 (conjureRemixLeaveRequests)
import noop from "module_19" /* 19 */;

const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixLeaveRequests.tsx");

export function requestConjureRemixLeave(arg0) {
  items = [...set];
  for (const item10010 of items) {
    let item10010Result = item10010(arg0);
    continue;
  }
}
export function useConjureRemixLeaveRequests(projectId, current) {
  noop = projectId;
  closure_2 = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  items = [projectId];
  const effect = noop.useEffect(() => {
    function listener(arg0) {
      if (arg0 === listener) {
        ref.current();
      }
    }
    current.add(listener);
    return () => {
      set.delete(listener);
    };
  }, items);
}