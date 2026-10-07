// === Module 6334: ScrollableContainer ===

// Module 6334 (ScrollableContainer)
import BottomSheetDraggableScrollable from "BottomSheetDraggableScrollable" /* 6335 */;
import _modDef6336 from "module_6336" /* 6336 */;
import _mod6338 from "module_6338" /* 6338 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ScrollableContainer = fn(19).forwardRef(function ScrollableContainer(arg0, ref) {
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.assign({ nativeGesture: 0, refreshControl: 0, refreshing: 0, progressViewOffset: 0, onRefresh: 0, ScrollableComponent: 0 }));
  const obj = { scrollableGesture: nativeGesture, children: null };
  const merged1 = Object.assign(merged);
  obj.children = <ScrollableComponent ref={ref} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, { scrollableGesture: nativeGesture, children: null });
  let tmp2Result = tmp6;
  if (onRefresh) {
    const obj3 = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod6338.styles.container, children: tmp6 };
    tmp2Result = jsx(_modDef6336, { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod6338.styles.container, children: tmp6 });
  }
  return tmp2Result;
});