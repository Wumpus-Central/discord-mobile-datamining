// === Module 1790: react ===

// Module 1790 (react)
import react from "react" /* 19 */;
import WorkletEventHandler from "WorkletEventHandler" /* 1748 */;

const useRef = react.useRef;

export const useEvent = function useEvent(fn) {
  let items = cResult;
  if (cResult === undefined) {
    items = [];
  }
  let flag = doDependenciesDiffer;
  if (doDependenciesDiffer === undefined) {
    flag = false;
  }
  const tmp = useRef(null);
  if (null === tmp.current) {
    const self = this;
    const self2 = this;
    tmp.current = { workletEventHandler: new WorkletEventHandler.WorkletEventHandler(fn, items) };
    const obj2 = { workletEventHandler: new WorkletEventHandler.WorkletEventHandler(fn, items) };
  } else if (flag) {
    tmp.current.workletEventHandler.updateEventHandler(fn, items);
    const obj = { workletEventHandler: tmp.current.workletEventHandler };
    tmp.current = obj;
  }
  return tmp.current;
};