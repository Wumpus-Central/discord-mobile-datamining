// _runtime/metro/01564__.js
import noop from "00019__.js";

const require = arg1;
let closure_3 = Symbol("VISITED_ROUTE_KEYS");
function shouldPreventRemove(emitter, beforeRemoveListeners, routes, routes2, target) {
  let tmp = target;
  closure_0 = routes2.map((key) => key.key);
  const found = routes.filter((key) => !closure_0.includes(key.key));
  let reversed = found.reverse();
  let tmp3 = closure_3;
  if (!(closure_3 in target)) {
    const _Set2 = Set;
    let set = new Set();
    const obj = {};
    const merged = Object.assign(tmp);
    obj[tmp3] = set;
    tmp = reversed;
    tmp3 = reversed[Symbol.iterator]();
    reversed = null;
  } else {
    const _Set = Set;
  }
  set = tmp[tmp3];
}

export { shouldPreventRemove };
export const useOnPreventRemove = function useOnPreventRemove(getState) {
  getState = getState.getState;
  const emitter = getState.emitter;
  const beforeRemoveListeners = getState.beforeRemoveListeners;
  const addKeyedListener = beforeRemoveListeners.useContext(
    getState(emitter[1]).NavigationBuilderContext,
  ).addKeyedListener;
  const context = beforeRemoveListeners.useContext(getState(emitter[2]).NavigationRouteContext);
  let key;
  if (context != null) {
    key = context.key;
  }
  const items = [addKeyedListener, beforeRemoveListeners, emitter, getState, key];
  const effect = beforeRemoveListeners.useEffect(() => {
    if (key) {
      let tmp2Result;
      if (addKeyedListener != null) {
        tmp2Result = tmp2("beforeRemove", tmp, (arg0) =>
          key(emitter, beforeRemoveListeners, getState().routes, [], arg0),
        );
      }
      return tmp2Result;
    }
  }, items);
};
