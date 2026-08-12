// _runtime/05541_useGestureRelationsUpdater.js
import noop from "noop";

let c3;
let obj1;
({ useEffect: obj1, useMemo: c3 } = noop);

export const useGestureRelationsUpdater = function useGestureRelationsUpdater(gesture) {
  let closure_0 = gesture;
  const items = [gesture];
  const tmp = callback2(() => {
    let configureRelationsResult = null;
    if (gesture) {
      configureRelationsResult = gesture(tmp[1]).configureRelations(tmp);
      const obj = gesture(tmp[1]);
    }
    return configureRelationsResult;
  }, items);
  const dependencyMap = tmp;
  const items1 = [tmp];
  callback(() => {
    if (closure_1) {
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
        const item = closure_1.forEach((arg0, arg1) => {
          const NativeProxy = callback(table[2]).NativeProxy;
          NativeProxy.configureRelations(arg1, arg0);
        });
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
};