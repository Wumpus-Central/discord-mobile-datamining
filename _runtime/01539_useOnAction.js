import noop from "noop";

const require = arg1;

export default function useOnAction(router) {
  router = router.router;
  const getState = router.getState;
  const setState = router.setState;
  const key = router.key;
  const actionListeners = router.actionListeners;
  const beforeRemoveListeners = router.beforeRemoveListeners;
  const routerConfigOptions = router.routerConfigOptions;
  const emitter = router.emitter;
  let onAction;
  let onRouteFocus;
  let addListener;
  let onDispatchAction;
  let closure_12;
  let callback;
  const context = key.useContext(getState(setState[1]));
  onAction = context.onAction;
  onRouteFocus = context.onRouteFocus;
  addListener = context.addListener;
  onDispatchAction = context.onDispatchAction;
  closure_12 = key.useRef(routerConfigOptions);
  const effect = key.useEffect(() => {
    closure_12.current = routerConfigOptions;
  });
  const items = [actionListeners, beforeRemoveListeners, emitter, getState, key, onAction, onDispatchAction, onRouteFocus, router, setState];
  callback = key.useCallback((target) => {
    let set = arg1;
    if (arg1 === undefined) {
      const _Set = Set;
      set = new Set();
    }
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
        if (null !== tmp10) {
          onDispatchAction(target, tmp4 === tmp10);
          if (tmp4 !== tmp10) {
            const obj3 = router(setState[2]);
            if (obj3.shouldPreventRemove(emitter, beforeRemoveListeners, tmp4.routes, tmp10.routes, target)) {
              return true;
            } else {
              setState(tmp10);
            }
          }
          if (undefined !== onRouteFocus) {
            let result = obj2.shouldActionChangeFocus(target);
            if (result) {
              result = undefined !== key;
            }
            if (result) {
              tmp25(key);
            }
          }
          return true;
        }
        obj2 = router;
      }
      if (undefined !== onAction) {
        if (onAction(target, set)) {
          return true;
        }
      }
      let diff = actionListeners.length - 1;
      if (0 <= diff) {
        while (!actionListeners[diff](target, set)) {
          diff = diff - 1;
        }
        return true;
      }
      return false;
    }
  }, items);
  getState(setState[2])({ getState, emitter, beforeRemoveListeners });
  const items1 = [addListener, callback];
  const effect1 = key.useEffect(() => {
    let tmpResult;
    if (addListener != null) {
      tmpResult = tmp("action", callback);
    }
    return tmpResult;
  }, items1);
  return callback;
};