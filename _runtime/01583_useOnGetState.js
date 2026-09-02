// === Module 1583: useOnGetState ===

// Module 1583 (useOnGetState)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useOnGetState = function useOnGetState(getState) {
  getState = getState.getState;
  const getStateListeners = getState.getStateListeners;
  let addKeyedListener;
  let str;
  let callback;
  addKeyedListener = addKeyedListener.useContext(getState(getStateListeners[1]).NavigationBuilderContext).addKeyedListener;
  const context = addKeyedListener.useContext(getState(getStateListeners[2]).NavigationRouteContext);
  str = "root";
  if (context) {
    str = context.key;
  }
  const items = [getState, getStateListeners];
  callback = obj.useCallback(() => {
    const tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((state) => {
      let tmpResult;
      if (table[state.key] != null) {
        tmpResult = tmp();
      }
      let tmp3 = state;
      if (state.state !== tmpResult) {
        const obj = {};
        const merged = Object.assign(state);
        obj.state = tmpResult;
        tmp3 = obj;
      }
      return tmp3;
    });
    let obj = getState(getStateListeners[3]);
    let tmp3 = tmp;
    if (!obj.isArrayEqual(tmp.routes, mapped)) {
      obj = {};
      let merged = Object.assign(tmp);
      obj.routes = mapped;
      tmp3 = obj;
    }
    return tmp3;
  }, items);
  const items1 = [addKeyedListener, callback, str];
  const effect = obj.useEffect(() => {
    let tmpResult;
    if (addKeyedListener != null) {
      tmpResult = tmp("getState", str, callback);
    }
    return tmpResult;
  }, items1);
};