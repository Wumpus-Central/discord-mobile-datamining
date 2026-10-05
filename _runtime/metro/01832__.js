// _runtime/metro/01832__.js
import react_native from "../00017_react-native.js";
import react from "../00019_react.js";
import react_native2 from "../01833_react-native.js";

const useRef = react.useRef;
const Animated = react_native.Animated;

export function useEventHandlerRegistration(arg0) {
  const ref = arg0;
  return (workletEventHandler) => {
    if (workletEventHandler.current) {
      let obj = ref(dependencyMap[2]);
      let findNodeHandleResult = obj.findNodeHandle(tmp.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in workletEventHandler) {
          workletEventHandler = workletEventHandler.workletEventHandler;
          workletEventHandler.registerForEvents(findNodeHandleResult);
        } else {
          workletEventHandler.registerForEvents(findNodeHandleResult);
        }
      }
    } else {
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(function attachWorkletHandlers() {
        const obj = react_native2;
        const findNodeHandleResult = obj.findNodeHandle(workletEventHandler.current);
        if (findNodeHandleResult) {
          if ("workletEventHandler" in workletEventHandler) {
            workletEventHandler.workletEventHandler.registerForEvents(findNodeHandleResult);
          } else {
            workletEventHandler.registerForEvents(findNodeHandleResult);
          }
        }
      });
    }
    return () => {
      const obj = react_native2;
      const findNodeHandleResult = obj.findNodeHandle(workletEventHandler.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in workletEventHandler) {
          workletEventHandler.workletEventHandler.unregisterFromEvents(findNodeHandleResult);
        } else {
          workletEventHandler.unregisterFromEvents(findNodeHandleResult);
        }
      }
    };
  };
}
export const useAnimatedValue = function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null === tmp.current) {
    const self = this;
    const self2 = this;
    const value = new Animated.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};
