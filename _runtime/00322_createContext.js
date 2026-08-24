// _runtime/00322_createContext.js
import noopAll from "00019_noop.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

noopAll;
({ useContext: c0, useMemo: closure_1, createContext } = noop);
const context = createContext(null);

export const VirtualizedListContext = context;
export const VirtualizedListContextResetter = function VirtualizedListContextResetter(children) {
  return <context.Provider value={null}>{arg0.children}</context.Provider>;
};
export const VirtualizedListContextProvider = function VirtualizedListContextProvider(children) {
  const value = children.value;
  closure_0 = value;
  const items = [, , , , ];
  ({ getScrollMetrics: arr[0], horizontal: arr[1], getOutermostParentListRef: arr[2], registerAsNestedChild: arr[3], unregisterAsNestedChild: arr[4] } = value);
  return <context.Provider value={callback(() => ({ cellKey: null, getScrollMetrics: value.getScrollMetrics, horizontal: value.horizontal, getOutermostParentListRef: value.getOutermostParentListRef, registerAsNestedChild: value.registerAsNestedChild, unregisterAsNestedChild: value.unregisterAsNestedChild }), items)}>{arg0.children}</context.Provider>;
};
export const VirtualizedListCellContextProvider = function VirtualizedListCellContextProvider(cellKey) {
  cellKey = cellKey.cellKey;
  let callback;
  const tmp = cellKey(context);
  callback = tmp;
  const items = [tmp, cellKey];
  return <context.Provider value={callback(() => {
    let tmp2 = null;
    if (null != closure_1) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj.cellKey = cellKey;
      tmp2 = obj;
    }
    return tmp2;
  }, items)}>{arg0.children}</context.Provider>;
};