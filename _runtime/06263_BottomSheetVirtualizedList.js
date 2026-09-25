// === Module 6263: BottomSheetVirtualizedList ===

// Module 6263 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6253 = fn(6253);
const memoResult = fn(19).memo(module_6253.createBottomSheetScrollableComponent(fn(6041).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;