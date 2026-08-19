// === Module 1585: useOnGetState ===

// Module 1585 (useOnGetState)
import noop from "noop" /* 19 */;

const require = arg1;

export const useOnGetState = function useOnGetState(getState) {
  getState = getState.getState;
  const getStateListeners = getState.getStateListeners;
  let addKeyedListener;
  let callback;
  addKeyedListener = addKeyedListener.useContext(getState(getStateListeners[1]).NavigationBuilderContext).addKeyedListener;
  const context = addKeyedListener.useContext(getState(getStateListeners[2]).NavigationRouteContext);
  let str = "root";
  if (context) {
    str = context.key;
  }
  const items = [getState, getStateListeners];
  callback = obj.useCallback(() => {
    const tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((item, index) => {
      let tmpResult;
      if (table[item.key] != null) {
        tmpResult = tmp();
      }
      let tmp3 = item;
      if (item.state !== tmpResult) {
        const obj = {};
        const merged = Object.assign(item);
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