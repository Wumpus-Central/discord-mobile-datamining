// _runtime/05675_ScrollableContainer.js
import "noop";
import { jsx } from "jsxProd";
import { BottomSheetDraggableScrollable } from "05676_BottomSheetDraggableScrollable.js";
import { memo } from "05677_memo.js";
import { styles } from "05679_styles.js";

const require = arg1;

export const ScrollableContainer = require("noop").forwardRef(function ScrollableContainer(arg0, ref) {
  let ScrollableComponent;
  let nativeGesture;
  let onRefresh;
  let progressViewOffset;
  let refreshControl;
  let refreshing;
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
    tmp2Result = jsx(memo, { scrollableGesture: null, refreshing: null, progressViewOffset: null, onRefresh: null, style: null, children: null });
    const tmp9 = memo;
  }
  return tmp2Result;
});