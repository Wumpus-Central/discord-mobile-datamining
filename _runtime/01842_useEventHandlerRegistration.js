// _runtime/01842_useEventHandlerRegistration.js
import { useRef } from "noop";
import { Animated } from "get ActivityIndicator";


export function useEventHandlerRegistration(arg0) {
  let closure_0 = arg0;
  return (workletEventHandler) => {
    if (workletEventHandler.current) {
      let findNodeHandleResult = ref(outer1_1[2]).findNodeHandle(tmp.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in workletEventHandler) {
          workletEventHandler.workletEventHandler.registerForEvents(findNodeHandleResult);
          workletEventHandler = workletEventHandler.workletEventHandler;
        } else {
          workletEventHandler.registerForEvents(findNodeHandleResult);
        }
      }
      const obj = ref(outer1_1[2]);
    } else {
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(function attachWorkletHandlers() {
        const findNodeHandleResult = workletEventHandler(outer2_1[2]).findNodeHandle(workletEventHandler.current);
        if (findNodeHandleResult) {
          if ("workletEventHandler" in workletEventHandler) {
            obj2.workletEventHandler.registerForEvents(findNodeHandleResult);
          } else {
            obj2.registerForEvents(findNodeHandleResult);
          }
        }
      });
    }
    return () => {
      const findNodeHandleResult = workletEventHandler(outer2_1[2]).findNodeHandle(workletEventHandler.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in workletEventHandler) {
          obj2.workletEventHandler.unregisterFromEvents(findNodeHandleResult);
        } else {
          obj2.unregisterFromEvents(findNodeHandleResult);
        }
      }
    };
  };
}
export const useAnimatedValue = function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null === tmp.current) {
    const value = new Animated.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};