// === Module 6750: BottomSheetVirtualizedList ===

// Module 6750 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1656 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6740 = fn(6740);
const memoResult = fn(19).memo(module_6740.createBottomSheetScrollableComponent(fn(6528).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;