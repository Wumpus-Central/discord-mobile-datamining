// === Module 1580: useOnAction ===

// Module 1580 (useOnAction)
import noop from "noop" /* 19 */;

const require = arg1;

export const useOnAction = function useOnAction(router) {
  router = router.router;
  const getState = router.getState;
  const setState = router.setState;
  const key = router.key;
  const actionListeners = router.actionListeners;
  const beforeRemoveListeners = router.beforeRemoveListeners;
  const routerConfigOptions = router.routerConfigOptions;
  const emitter = router.emitter;
  const context = setState.useContext(router(getState[1]).NavigationBuilderContext);
  const onAction = context.onAction;
  const onRouteFocus = context.onRouteFocus;
  const addListener = context.addListener;
  const onDispatchAction = context.onDispatchAction;
  const flushUpdates = context.flushUpdates;
  const context1 = setState.useContext(router(getState[2]).DeprecatedNavigationInChildContext);
  closure_14 = setState.useRef(routerConfigOptions);
  const insertionEffect = setState.useInsertionEffect(() => {
    closure_14.current = routerConfigOptions;
  });
  const items = [actionListeners, beforeRemoveListeners, emitter, flushUpdates, getState, context1, key, onAction, onDispatchAction, onRouteFocus, router, setState];
  const callback = setState.useCallback((target) => {
    let set = arg1;
    if (arg1 === undefined) {
      const _Set = Set;
      set = new Set();
    }
    flushUpdates();
    const tmp6 = getState();
    if (set.has(tmp6.key)) {
      return false;
    } else {
      set.add(tmp6.key);
      if (typeof target.target !== "string") {
        const stateForAction = router.getStateForAction(tmp6, target, ref.current);
        let tmp12 = stateForAction;
        if (null === stateForAction) {
          tmp12 = stateForAction;
          if (target.target === tmp6.key) {
            tmp12 = tmp6;
          }
        }
        let tmp13 = null !== tmp12;
        if (tmp13) {
          tmp13 = false !== tmp12.stale;
        }
        let rehydratedState = tmp12;
        if (tmp13) {
          rehydratedState = router.getRehydratedState(tmp12, ref.current);
        }
        if (null !== rehydratedState) {
          if (tmp6 !== rehydratedState) {
            const obj3 = router(getState[3]);
            if (obj3.shouldPreventRemove(emitter, beforeRemoveListeners, tmp6.routes, rehydratedState.routes, target)) {
              onDispatchAction(target, true);
              return true;
            } else if (getState() !== tmp6) {
              const _Set2 = Set;
              const set1 = new Set();
              return callback(target, set1);
            } else {
              onDispatchAction(target, false);
              setState(rehydratedState);
            }
          } else {
            onDispatchAction(target, true);
          }
          if (undefined !== onRouteFocus) {
            let result = router.shouldActionChangeFocus(target);
            if (result) {
              result = undefined !== key;
            }
            if (result) {
              tmp32(key);
            }
          }
          return true;
        }
      }
      if (undefined !== onAction) {
        if (onAction(target, set)) {
          return true;
        }
      }
      if (typeof target.target !== "string") {
        return false;
      }
      let diff = actionListeners.length - 1;
      if (0 <= diff) {
        while (!actionListeners[diff](target, set)) {
          diff = diff - 1;
        }
        return true;
      }
    }
  }, items);
  const onPreventRemove = router(getState[3]).useOnPreventRemove({ getState, emitter, beforeRemoveListeners });
  const items1 = [addListener, callback];
  const effect = setState.useEffect(() => {
    let tmpResult;
    if (addListener != null) {
      tmpResult = tmp("action", callback);
    }
    return tmpResult;
  }, items1);
  return callback;
};