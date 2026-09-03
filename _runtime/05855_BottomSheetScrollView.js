// _runtime/05855_BottomSheetScrollView.js
import cancelAnimationDefault from "01652_cancelAnimation.js";
import createBottomSheetScrollableComponent from "05846_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(
  createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(
    require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW,
    animatedComponent,
  ),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
