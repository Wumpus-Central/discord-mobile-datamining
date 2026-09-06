// _runtime/metro/01783__.js
import _mod19 from "00019__.js";
import WorkletEventHandlerNative from "../01741_WorkletEventHandlerNative.js";

const useRef = _mod19.useRef;

export const useEvent = function useEvent(fn, items, doDependenciesDiffer) {
  if (items === undefined) {
    items = [];
  }
  let flag = doDependenciesDiffer;
  if (doDependenciesDiffer === undefined) {
    flag = false;
  }
  const tmp = useRef(null);
  if (null === tmp.current) {
    let workletEventHandler = new WorkletEventHandlerNative.WorkletEventHandler(fn, items);
    let obj = { workletEventHandler };
    tmp.current = obj;
  } else if (flag) {
    workletEventHandler = tmp.current.workletEventHandler;
    workletEventHandler.updateEventHandler(fn, items);
    obj = { workletEventHandler };
    tmp.current = obj;
  }
  return tmp.current;
};
