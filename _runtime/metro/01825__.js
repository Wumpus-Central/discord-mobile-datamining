// === Module 1825: ? ===

// Module 1825
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;
import _mod1826 from "module_1826" /* 1826 */;

const useRef = _mod19.useRef;
const Animated = _mod17.Animated;

export function useEventHandlerRegistration(arg0) {
  return (workletEventHandler) => {
    if (workletEventHandler.current) {
      let findNodeHandleResult = ref(dependencyMap[2]).findNodeHandle(tmp.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in workletEventHandler) {
          workletEventHandler.workletEventHandler.registerForEvents(findNodeHandleResult);
          workletEventHandler = workletEventHandler.workletEventHandler;
        } else {
          workletEventHandler.registerForEvents(findNodeHandleResult);
        }
      }
      const obj = ref(dependencyMap[2]);
    } else {
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(function attachWorkletHandlers() {
        const findNodeHandleResult = _mod1826.findNodeHandle(workletEventHandler.current);
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
      const findNodeHandleResult = _mod1826.findNodeHandle(workletEventHandler.current);
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
    value = new Animated.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};