// _runtime/06863_BottomSheetScrollView.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(
  module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
