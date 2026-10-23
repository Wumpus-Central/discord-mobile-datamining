// _runtime/05489_BottomSheetScrollView.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5480 = fn(5480);
const memoResult = fn(19).memo(
  module_5480.createBottomSheetScrollableComponent(fn(5268).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
