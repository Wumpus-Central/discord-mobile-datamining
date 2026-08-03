import noop from "noop";

let closure_3 = Symbol("VISITED_ROUTE_KEYS");
function shouldPreventRemove(emitter, beforeRemoveListeners, routes, routes2, target) {
  let closure_0 = routes2.map((key) => key.key);
  const found = routes.filter((key) => !closure_0.includes(key.key));
  const reversed = found.reverse();
  let set = target[closure_3];
  if (set == null) {
    const _Set = Set;
    set = new Set();
  }
  let obj = {};
  const merged = Object.assign(target);
  obj[closure_3] = set;
  for (const item10030 of reversed) {
    let tmp7 = item10030;
    if (!set.has(item10030.key)) {
      let tmp8 = item10030;
      let tmp9 = arg1[tmp7.key];
      let tmp9Result;
      if (tmp9 != null) {
        tmp9Result = tmp9(obj);
      }
      if (tmp9Result) {
        let tmp14 = obj4;
        obj4.return();
        let flag2 = true;
        return true;
      } else {
        let tmp11 = item10030;
        let addResult = set.add(tmp7.key);
        obj = { type: "beforeRemove", target: null, data: null, canPreventDefault: true };
        obj[1] = tmp7.key;
        let obj1 = { action: null };
        obj1[0] = obj;
        obj[2] = obj1;
        if (arg0.emit(obj).defaultPrevented) {
          let tmp13 = obj4;
          obj4.return();
          let flag = true;
          return true;
        }
      }
    }
    continue;
  }
  return false;
}

export default function useOnPreventRemove(getState) {
  getState = getState.getState;
  const emitter = getState.emitter;
  const beforeRemoveListeners = getState.beforeRemoveListeners;
  let addKeyedListener;
  let key;
  addKeyedListener = beforeRemoveListeners.useContext(getState(emitter[1])).addKeyedListener;
  const context = beforeRemoveListeners.useContext(getState(emitter[2]));
  key = undefined;
  if (context != null) {
    key = context.key;
  }
  const items = [addKeyedListener, beforeRemoveListeners, emitter, getState, key];
  const effect = beforeRemoveListeners.useEffect(() => {
    if (key) {
      let tmp2Result;
      if (addKeyedListener != null) {
        tmp2Result = tmp2("beforeRemove", tmp, (arg0) => outer1_4(closure_1, noop, callback().routes, [], arg0));
      }
      return tmp2Result;
    }
  }, items);
};
export { shouldPreventRemove };