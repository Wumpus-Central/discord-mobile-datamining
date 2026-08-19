// _runtime/00322_createContext.js
import noopAll from "00019_noop.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

noopAll;
({ useContext: c0, useMemo: closure_1, createContext } = noop);
const context = createContext(null);

export const VirtualizedListContext = context;
export const VirtualizedListContextResetter = function VirtualizedListContextResetter(children) {
  return <context.Provider value={null}>{children.children}</context.Provider>;
};
export const VirtualizedListContextProvider = function VirtualizedListContextProvider(children) {
  const value = children.value;
  closure_0 = value;
  const items = [, , , , ];
  ({ getScrollMetrics: arr[0], horizontal: arr[1], getOutermostParentListRef: arr[2], registerAsNestedChild: arr[3], unregisterAsNestedChild: arr[4] } = value);
  return <context.Provider value={callback(() => ({ cellKey: null, getScrollMetrics: value.getScrollMetrics, horizontal: value.horizontal, getOutermostParentListRef: value.getOutermostParentListRef, registerAsNestedChild: value.registerAsNestedChild, unregisterAsNestedChild: value.unregisterAsNestedChild }), items)}>{children.children}</context.Provider>;
};
export const VirtualizedListCellContextProvider = function VirtualizedListCellContextProvider(cellKey) {
  cellKey = cellKey.cellKey;
  const tmp = cellKey(context);
  const callback = tmp;
  const items = [tmp, cellKey];
  return <context.Provider value={callback(() => {
    let tmp2 = null;
    if (null != closure_1) {
      const obj = {};
      const merged = Object.assign(closure_1);
      obj.cellKey = cellKey;
      tmp2 = obj;
    }
    return tmp2;
  }, items)}>{cellKey.children}</context.Provider>;
};