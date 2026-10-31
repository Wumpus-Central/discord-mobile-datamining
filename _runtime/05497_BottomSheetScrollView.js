// _runtime/05497_BottomSheetScrollView.js
import cancelAnimation from "01650_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5488 = fn(5488);
const memoResult = fn(19).memo(
  module_5488.createBottomSheetScrollableComponent(fn(5276).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
