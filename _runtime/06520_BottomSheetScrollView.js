// _runtime/06520_BottomSheetScrollView.js
import cancelAnimation from "01655_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6511 = fn(6511);
const memoResult = fn(19).memo(
  module_6511.createBottomSheetScrollableComponent(fn(6299).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
