// === Module 1571: ? ===

// Module 1571
import react from "react" /* 19 */;

let set;

let closure_3 = Symbol("VISITED_ROUTE_KEYS");
function shouldPreventRemove(emitter, beforeRemoveListeners, routes, routes2, target) {
  let obj3;
  let closure_0 = routes2.map((key) => key.key);
  const found = routes.filter((key) => !closure_0.includes(key.key));
  const reversed = found.reverse();
  if (closure_3 in target) {
    const _Set = Set;
    if (target[closure_3] instanceof Set) {
      set = target[closure_3];
    }
    const obj = {};
    const merged = Object.assign(target);
    obj[closure_3] = set;
    const iter = reversed[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp12 = nextResult;
      if (!set.has(nextResult.key)) {
        let tmp14 = beforeRemoveListeners[tmp12.key];
        let tmp14Result;
        if (tmp14 != null) {
          tmp14Result = tmp14(obj);
        }
        if (tmp14Result) {
          iter.return();
          let flag2 = true;
          return true;
        } else {
          let addResult = set.add(tmp12.key);
          let obj2 = { type: "beforeRemove", target: tmp12.key, data: obj3, canPreventDefault: true };
          obj3 = { action: obj };
          if (emitter.emit(obj2).defaultPrevented) {
            iter.return();
            let flag = true;
            return true;
          }
        }
      }
      continue;
    }
    return false;
  }
  set = new Set();
}

export { shouldPreventRemove };
export const useOnPreventRemove = function useOnPreventRemove(getState) {
  getState = getState.getState;
  const emitter = getState.emitter;
  const beforeRemoveListeners = getState.beforeRemoveListeners;
  const addKeyedListener = beforeRemoveListeners.useContext(getState(emitter[1]).NavigationBuilderContext).addKeyedListener;
  const context = beforeRemoveListeners.useContext(getState(emitter[2]).NavigationRouteContext);
  let key;
  const obj = beforeRemoveListeners;
  if (context != null) {
    key = context.key;
  }
  const items = [addKeyedListener, beforeRemoveListeners, emitter, getState, key];
  const effect = obj.useEffect(() => {
    if (key) {
      let tmp2Result;
      if (addKeyedListener != null) {
        tmp2Result = tmp2("beforeRemove", tmp, (arg0) => key(emitter, beforeRemoveListeners, getState().routes, [], arg0));
      }
      return tmp2Result;
    }
  }, items);
};