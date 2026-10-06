// === Module 6334: ScrollableContainer ===

// Module 6334 (ScrollableContainer)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import BottomSheetDraggableScrollable2 from "BottomSheetDraggableScrollable" /* 6335 */;
import BottomSheetRefreshControlDefault from "BottomSheetRefreshControl" /* 6336 */;
import react_native from "react-native" /* 6338 */;

const forwardRef = react2.forwardRef;
const jsx = Fragment.jsx;

export const ScrollableContainer = forwardRef(function ScrollableContainer(arg0, ref) {
  let ScrollableComponent;
  let nativeGesture;
  let onRefresh;
  let progressViewOffset;
  let refreshControl;
  let refreshing;
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.assign({ nativeGesture: 0, refreshControl: 0, refreshing: 0, progressViewOffset: 0, onRefresh: 0, ScrollableComponent: 0 }));
  const BottomSheetDraggableScrollable = BottomSheetDraggableScrollable2.BottomSheetDraggableScrollable;
  const merged1 = Object.assign(merged);
  const tmp6 = <BottomSheetDraggableScrollable scrollableGesture={nativeGesture}>{null}</BottomSheetDraggableScrollable>;
  let tmp2Result = tmp6;
  if (onRefresh) {
    BottomSheetRefreshControlDefault;
    tmp2Result = <tmp9 scrollableGesture={nativeGesture} refreshing={refreshing} progressViewOffset={progressViewOffset} onRefresh={onRefresh} style={react_native.styles.container}>{tmp6}</tmp9>;
  }
  return tmp2Result;
});