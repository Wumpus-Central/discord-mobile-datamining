// === Module 1800: useEvent ===

// Module 1800 (useEvent)
import noop from "noop" /* 19 */;
import importDefaultResult1 from "importDefaultResult1" /* 1758 */;

const useRef = noop.useRef;

export const useEvent = function useEvent(fn, closure_4, doDependenciesDiffer) {
  let items = closure_4;
  if (closure_4 === undefined) {
    items = [];
  }
  let flag = doDependenciesDiffer;
  if (doDependenciesDiffer === undefined) {
    flag = false;
  }
  const tmp = useRef(null);
  if (null === tmp.current) {
    let workletEventHandler = new importDefaultResult1.WorkletEventHandler(fn, items);
    let obj = { workletEventHandler: null };
    obj[0] = workletEventHandler;
    tmp.current = obj;
  } else if (flag) {
    workletEventHandler = tmp.current.workletEventHandler;
    workletEventHandler.updateEventHandler(fn, items);
    obj = { workletEventHandler: null };
    obj[0] = workletEventHandler;
    tmp.current = obj;
  }
  return tmp.current;
};