// _runtime/06262_BottomSheetScrollView.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6253 = fn(6253);
const memoResult = fn(19).memo(
  module_6253.createBottomSheetScrollableComponent(fn(6041).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
