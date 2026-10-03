// _runtime/06334_BottomSheetScrollView.js
import cancelAnimation from "01643_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6325 = fn(6325);
const memoResult = fn(19).memo(
  module_6325.createBottomSheetScrollableComponent(fn(6113).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
