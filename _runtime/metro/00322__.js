// _runtime/metro/00322__.js
import "module_19";

const noop = fn(19);
({ useContext: closure_0, useMemo: closure_1, createContext } = noop);
const jsx = fn(21).jsx;
const context = createContext(null);

export const VirtualizedListContext = context;
export const VirtualizedListContextResetter = function VirtualizedListContextResetter(children) {
  return <context.Provider value={null}>{children.children}</context.Provider>;
};
export const VirtualizedListContextProvider = function VirtualizedListContextProvider(children) {
  value = children.value;
  const items = [, , , ,];
  ({
    getScrollMetrics: arr[0],
    horizontal: arr[1],
    getOutermostParentListRef: arr[2],
    registerAsNestedChild: arr[3],
    unregisterAsNestedChild: arr[4],
  } = value);
  return (
    <context.Provider
      value={framebus(
        () => ({
          cellKey: null,
          getScrollMetrics: value.getScrollMetrics,
          horizontal: value.horizontal,
          getOutermostParentListRef: value.getOutermostParentListRef,
          registerAsNestedChild: value.registerAsNestedChild,
          unregisterAsNestedChild: value.unregisterAsNestedChild,
        }),
        items,
      )}
    >
      {children.children}
    </context.Provider>
  );
};
export const VirtualizedListCellContextProvider = function VirtualizedListCellContextProvider(cellKey) {
  cellKey = cellKey.cellKey;
  const tmp = React(context);
  closure_1 = tmp;
  const items = [tmp, cellKey];
  return (
    <context.Provider
      value={framebus(() => {
        let tmp2 = null;
        if (null != closure_1) {
          const obj = {};
          const merged = Object.assign(closure_1);
          obj.cellKey = cellKey;
          tmp2 = obj;
        }
        return tmp2;
      }, items)}
    >
      {cellKey.children}
    </context.Provider>
  );
};
