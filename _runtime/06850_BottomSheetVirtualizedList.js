// _runtime/06850_BottomSheetVirtualizedList.js
import cancelAnimationDefault from "01636_cancelAnimation.js";
import createBottomSheetScrollableComponent from "06840_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(
  require("get ActivityIndicator").VirtualizedList,
);
const memoResult = require("noop").memo(
  createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(
    require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST,
    animatedComponent,
  ),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
