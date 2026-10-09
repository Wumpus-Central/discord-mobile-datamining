// _runtime/06527_BottomSheetScrollView.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6518 = fn(6518);
const memoResult = fn(19).memo(
  module_6518.createBottomSheetScrollableComponent(fn(6306).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
