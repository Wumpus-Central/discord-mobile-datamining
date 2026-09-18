// _runtime/07042_BottomSheetScrollView.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7033 = fn(7033);
const memoResult = fn(19).memo(
  module_7033.createBottomSheetScrollableComponent(fn(6821).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
