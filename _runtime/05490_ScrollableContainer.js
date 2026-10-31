// _runtime/05490_ScrollableContainer.js
import BottomSheetDraggableScrollable from "05491_BottomSheetDraggableScrollable.js";
import _modDef5492 from "metro/05492__.js";
import _mod5494 from "metro/05494__.js";
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
      style: _mod5494.styles.container,
      children: tmp6,
    };
    tmp2Result = jsx(_modDef5492, {
      scrollableGesture: nativeGesture,
      refreshing,
      progressViewOffset,
      onRefresh,
      style: _mod5494.styles.container,
      children: tmp6,
    });
  }
  return tmp2Result;
});
