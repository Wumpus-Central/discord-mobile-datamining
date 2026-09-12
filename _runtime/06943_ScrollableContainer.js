// === Module 6943: ScrollableContainer ===

// Module 6943 (ScrollableContainer)
import BottomSheetDraggableScrollable from "BottomSheetDraggableScrollable" /* 6944 */;
import _modDef6945 from "module_6945" /* 6945 */;
import _mod6947 from "module_6947" /* 6947 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ScrollableContainer = fn(19).forwardRef(function ScrollableContainer(arg0, ref) {
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.assign({ nativeGesture: 0, refreshControl: 0, refreshing: 0, progressViewOffset: 0, onRefresh: 0, ScrollableComponent: 0 }));
  let obj = { scrollableGesture: nativeGesture, children: null };
  obj = { ref };
  const merged1 = Object.assign(merged);
  obj.children = <ScrollableComponent ref={ref} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, { ref });
  let tmp2Result = tmp6;
  if (onRefresh) {
    obj = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod6947.styles.container, children: tmp6 };
    tmp2Result = jsx(_modDef6945, { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod6947.styles.container, children: tmp6 });
  }
  return tmp2Result;
});