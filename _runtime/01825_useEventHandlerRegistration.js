// === Module 1825: useEventHandlerRegistration ===

// Module 1825 (useEventHandlerRegistration)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
const Animated = get_ActivityIndicator.Animated;

export function useEventHandlerRegistration(arg0) {
  closure_0 = arg0;
  return (workletEventHandler) => {
    if (workletEventHandler.current) {
      let findNodeHandleResult = ref(closure_1_1[2]).findNodeHandle(tmp.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in workletEventHandler) {
          workletEventHandler.workletEventHandler.registerForEvents(findNodeHandleResult);
          workletEventHandler = workletEventHandler.workletEventHandler;
        } else {
          workletEventHandler.registerForEvents(findNodeHandleResult);
        }
      }
      const obj = ref(closure_1_1[2]);
    } else {
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(function attachWorkletHandlers() {
        const findNodeHandleResult = workletEventHandler(closure_2_1[2]).findNodeHandle(workletEventHandler.current);
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
      const findNodeHandleResult = workletEventHandler(closure_2_1[2]).findNodeHandle(workletEventHandler.current);
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