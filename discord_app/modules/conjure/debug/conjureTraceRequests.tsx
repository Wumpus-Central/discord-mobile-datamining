// === Module 12085: conjureTraceRequests ===

// Module 12085 (conjureTraceRequests)
import noop from "module_19" /* 19 */;

const set = new Set();
let c2 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/conjureTraceRequests.tsx");

export function requestConjureTrace(projectId, traceId) {
  c2 = { projectId, traceId };
  const items = [...set];
  for (const item10012 of items) {
    let item10012Result = item10012(arg0);
    continue;
  }
}
export function hasConjureTraceRequest(arg0) {
  let projectId;
  if (_null != null) {
    projectId = _null.projectId;
  }
  return projectId === arg0;
}
export function takeConjureTraceRequest(projectId) {
  if (null != _null) {
    if (_null.projectId === projectId) {
      _null = null;
      return _null.traceId;
    }
  }
  return null;
}
export function useConjureTraceRequests(projectId, callback1) {
  noop = projectId;
  const current = callback1;
  closure_2 = noop.useRef(callback1);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [projectId];
  const effect = noop.useEffect(() => {
    if (null != listener) {
      listener = function listener(arg0) {
        if (arg0 === listener) {
          ref.current();
        }
      };
      current.add(listener);
      return () => {
        set.delete(listener);
      };
    }
  }, items);
}