// === Module 5791: ScrollableContainer ===

// Module 5791 (ScrollableContainer)
import noopDefault from "noop" /* 19 */;
import BottomSheetDraggableScrollable from "BottomSheetDraggableScrollable" /* 5792 */;
import memoDefault from "memo" /* 5793 */;
import styles from "styles" /* 5795 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopDefault;

export const ScrollableContainer = require("noop").forwardRef(function ScrollableContainer(arg0, ref) {
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = { scrollableGesture: nativeGesture, children: null };
  obj = { ref };
  const merged1 = Object.assign(merged);
  obj[1] = <ScrollableComponent ref={arg1} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, { ref });
  let tmp2Result = tmp6;
  if (onRefresh) {
    obj = { scrollableGesture: null, refreshing: null, progressViewOffset: null, onRefresh: null, style: null, children: null };
    obj[0] = nativeGesture;
    obj[1] = refreshing;
    obj[2] = progressViewOffset;
    obj[3] = onRefresh;
    obj[4] = styles.styles.container;
    obj[5] = tmp6;
    tmp2Result = jsx(memoDefault, { scrollableGesture: null, refreshing: null, progressViewOffset: null, onRefresh: null, style: null, children: null });
    const tmp9 = memoDefault;
  }
  return tmp2Result;
});