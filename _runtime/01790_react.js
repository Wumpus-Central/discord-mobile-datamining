// _runtime/01790_react.js
import react from "00019_react.js";
import WorkletEventHandler from "01748_WorkletEventHandler.js";

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
