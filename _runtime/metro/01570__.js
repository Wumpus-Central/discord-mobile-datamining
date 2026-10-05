// === Module 1570: ? ===

// Module 1570
import _mod1571 from "module_1571" /* 1571 */;
import react from "react" /* 19 */;

let set;


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
  const ref = setState.useRef(routerConfigOptions);
  const insertionEffect = setState.useInsertionEffect(() => {
    ref.current = routerConfigOptions;
  });
  const items = [actionListeners, beforeRemoveListeners, emitter, flushUpdates, getState, context1, key, onAction, onDispatchAction, onRouteFocus, router, setState];
  const callback = setState.useCallback(function(target) {
    set = arg1;
    if (arg1 === undefined) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    flushUpdates();
    const tmp4 = getState();
    if (set.has(tmp4.key)) {
      return false;
    } else {
      set.add(tmp4.key);
      if (typeof target.target !== "string") {
        const stateForAction = router.getStateForAction(tmp4, target, ref.current);
        let tmp10 = stateForAction;
        if (null === stateForAction) {
          tmp10 = stateForAction;
          if (target.target === tmp4.key) {
            tmp10 = tmp4;
          }
        }
        let rehydratedState = tmp10;
        const tmp11 = null !== tmp10 && false !== tmp10.stale;
        if (tmp11) {
          rehydratedState = router.getRehydratedState(tmp10, ref.current);
        }
        if (null !== rehydratedState) {
          if (tmp4 !== rehydratedState) {
            const obj3 = _mod1571;
            if (obj3.shouldPreventRemove(emitter, beforeRemoveListeners, tmp4.routes, rehydratedState.routes, target)) {
              onDispatchAction(target, true);
              return true;
            } else if (getState() !== tmp4) {
              const _Set2 = Set;
              const self3 = this;
              const self4 = this;
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
            const result = router.shouldActionChangeFocus(target) && undefined !== key;
            if (result) {
              tmp30(key);
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
  const obj = router(getState[3]);
  const onPreventRemove = obj.useOnPreventRemove({ getState, emitter, beforeRemoveListeners });
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