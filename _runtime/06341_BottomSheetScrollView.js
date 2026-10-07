// _runtime/06341_BottomSheetScrollView.js
import cancelAnimation from "01643_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6332 = fn(6332);
const memoResult = fn(19).memo(
  module_6332.createBottomSheetScrollableComponent(fn(6120).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
