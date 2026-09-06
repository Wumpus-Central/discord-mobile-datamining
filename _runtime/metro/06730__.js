// === Module 6730: ? ===

// Module 6730
import traverseAndConfigureRelations from "traverseAndConfigureRelations" /* 6729 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useMemo: c3 } = noop);

export const useGestureRelationsUpdater = function useGestureRelationsUpdater(gesture) {
  closure_0 = gesture;
  const items = [gesture];
  const tmp = closure_3(() => {
    let configureRelationsResult = null;
    if (closure_0) {
      configureRelationsResult = traverseAndConfigureRelations.configureRelations(tmp);
    }
    return configureRelationsResult;
  }, items);
  closure_1 = tmp;
  const items1 = [tmp];
  closure_2(() => {
    if (closure_1) {
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const item = closure_1_1.forEach((item, index) => {
          const NativeProxy = closure_1_0(closure_1_1[2]).NativeProxy;
          NativeProxy.configureRelations(index, item);
        });
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
};