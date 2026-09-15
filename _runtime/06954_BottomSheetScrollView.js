// _runtime/06954_BottomSheetScrollView.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6945 = fn(6945);
const memoResult = fn(19).memo(
  module_6945.createBottomSheetScrollableComponent(fn(6733).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
