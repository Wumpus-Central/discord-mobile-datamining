// === Module 322: ? ===

// Module 322
import Fragment from "Fragment" /* 21 */;
import "react";
import react from "react" /* 19 */;

let _window;
let createContext;
let map;
({ useContext: _window, useMemo: map, createContext } = react);
const jsx = Fragment.jsx;
const context = createContext(null);

export const VirtualizedListContext = context;
export const VirtualizedListContextResetter = function VirtualizedListContextResetter(children) {
  return <context.Provider value={null}>{children.children}</context.Provider>;
};
export const VirtualizedListContextProvider = function VirtualizedListContextProvider(children) {
  const value = children.value;
  const items = [, , , , ];
  ({ getScrollMetrics: arr[0], horizontal: arr[1], getOutermostParentListRef: arr[2], registerAsNestedChild: arr[3], unregisterAsNestedChild: arr[4] } = value);
  return <context.Provider value={map(() => ({ cellKey: null, getScrollMetrics: value.getScrollMetrics, horizontal: value.horizontal, getOutermostParentListRef: value.getOutermostParentListRef, registerAsNestedChild: value.registerAsNestedChild, unregisterAsNestedChild: value.unregisterAsNestedChild }), items)}>{children.children}</context.Provider>;
};
export const VirtualizedListCellContextProvider = function VirtualizedListCellContextProvider(cellKey) {
  cellKey = cellKey.cellKey;
  const children = cellKey.children;
  const tmp = React(context);
  map = tmp;
  const items = [tmp, cellKey];
  return <context.Provider value={map(() => {
    let tmp2 = null;
    if (null != closure_1) {
      const obj = { cellKey };
      const merged = Object.assign(closure_1);
      tmp2 = obj;
    }
    return tmp2;
  }, items)}>{children}</context.Provider>;
};