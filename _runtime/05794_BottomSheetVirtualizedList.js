// _runtime/05794_BottomSheetVirtualizedList.js
import cancelAnimationDefault from "01654_cancelAnimation.js";
import createBottomSheetScrollableComponent from "05784_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").VirtualizedList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;