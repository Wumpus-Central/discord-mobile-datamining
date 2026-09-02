// _runtime/05855_BottomSheetVirtualizedList.js
import cancelAnimationDefault from "01652_cancelAnimation.js";
import createBottomSheetScrollableComponent from "05845_createBottomSheetScrollableComponent.js";

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
