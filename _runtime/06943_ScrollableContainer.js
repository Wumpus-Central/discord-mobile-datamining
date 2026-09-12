// _runtime/06943_ScrollableContainer.js
import BottomSheetDraggableScrollable from "06944_BottomSheetDraggableScrollable.js";
import _modDef6945 from "metro/06945__.js";
import _mod6947 from "metro/06947__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const ScrollableContainer = fn(19).forwardRef(function ScrollableContainer(arg0, ref) {
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      nativeGesture: 0,
      refreshControl: 0,
      refreshing: 0,
      progressViewOffset: 0,
      onRefresh: 0,
      ScrollableComponent: 0,
    }),
  );
  let obj = { scrollableGesture: nativeGesture, children: null };
  obj = { ref };
  const merged1 = Object.assign(merged);
  obj.children = <ScrollableComponent ref={ref} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, { ref });
  let tmp2Result = tmp6;
  if (onRefresh) {
    obj = {
      scrollableGesture: nativeGesture,
      refreshing,
      progressViewOffset,
      onRefresh,
      style: _mod6947.styles.container,
      children: tmp6,
    };
    tmp2Result = jsx(_modDef6945, {
      scrollableGesture: nativeGesture,
      refreshing,
      progressViewOffset,
      onRefresh,
      style: _mod6947.styles.container,
      children: tmp6,
    });
  }
  return tmp2Result;
});
