// _runtime/06529_BottomSheetScrollView.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6520 = fn(6520);
const memoResult = fn(19).memo(
  module_6520.createBottomSheetScrollableComponent(fn(6308).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
