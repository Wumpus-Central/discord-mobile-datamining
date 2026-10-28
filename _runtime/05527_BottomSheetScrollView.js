// _runtime/05527_BottomSheetScrollView.js
import cancelAnimation from "01655_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5518 = fn(5518);
const memoResult = fn(19).memo(
  module_5518.createBottomSheetScrollableComponent(fn(5306).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
