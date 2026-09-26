// _runtime/metro/01785__.js
import _mod19 from "00019__.js";
import WorkletEventHandlerNative from "../01743_WorkletEventHandlerNative.js";

const useRef = _mod19.useRef;

export const useEvent = function useEvent(fn) {
  if (items === undefined) {
    items = [];
  }
  let flag = doDependenciesDiffer;
  if (doDependenciesDiffer === undefined) {
    flag = false;
  }
  const tmp = useRef(null);
  if (null === tmp.current) {
    const workletEventHandler1 = new WorkletEventHandlerNative.WorkletEventHandler(fn, items);
    const obj2 = { workletEventHandler: workletEventHandler1 };
    tmp.current = obj2;
  } else if (flag) {
    tmp.current.workletEventHandler.updateEventHandler(fn, items);
    const obj = { workletEventHandler: tmp.current.workletEventHandler };
    tmp.current = obj;
  }
  return tmp.current;
};
