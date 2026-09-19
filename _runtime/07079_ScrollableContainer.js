// _runtime/07079_ScrollableContainer.js
import BottomSheetDraggableScrollable from "07080_BottomSheetDraggableScrollable.js";
import _modDef7081 from "metro/07081__.js";
import _mod7083 from "metro/07083__.js";
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
  const obj = { scrollableGesture: nativeGesture, children: null };
  const merged1 = Object.assign(merged);
  obj.children = <ScrollableComponent ref={ref} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, {
    scrollableGesture: nativeGesture,
    children: null,
  });
  let tmp2Result = tmp6;
  if (onRefresh) {
    const obj3 = {
      scrollableGesture: nativeGesture,
      refreshing,
      progressViewOffset,
      onRefresh,
      style: _mod7083.styles.container,
      children: tmp6,
    };
    tmp2Result = jsx(_modDef7081, {
      scrollableGesture: nativeGesture,
      refreshing,
      progressViewOffset,
      onRefresh,
      style: _mod7083.styles.container,
      children: tmp6,
    });
  }
  return tmp2Result;
});
