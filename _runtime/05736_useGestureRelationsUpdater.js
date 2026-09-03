// _runtime/05736_useGestureRelationsUpdater.js
import noop from "00019_noop.js";

({ useEffect: obj1, useMemo: c3 } = noop);

export const useGestureRelationsUpdater = function useGestureRelationsUpdater(gesture) {
  closure_0 = gesture;
  const items = [gesture];
  const tmp = callback2(() => {
    let configureRelationsResult = null;
    if (gesture) {
      configureRelationsResult = gesture(table[1]).configureRelations(tmp);
      const obj = gesture(table[1]);
    }
    return configureRelationsResult;
  }, items);
  closure_1 = tmp;
  const items1 = [tmp];
  callback(() => {
    if (closure_1) {
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const item = closure_1.forEach((arg0, arg1) => {
          const NativeProxy = callback(table[2]).NativeProxy;
          NativeProxy.configureRelations(arg1, arg0);
        });
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
};
