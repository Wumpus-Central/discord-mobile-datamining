// _runtime/06751_BottomSheetScrollView.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6742 = fn(6742);
const memoResult = fn(19).memo(
  module_6742.createBottomSheetScrollableComponent(fn(6530).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
