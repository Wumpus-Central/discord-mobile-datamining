// _runtime/06849_BottomSheetScrollView.js
import cancelAnimationDefault from "01636_cancelAnimation.js";
import createBottomSheetScrollableComponent from "06840_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(
  createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(
    require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW,
    animatedComponent,
  ),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
