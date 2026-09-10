// _runtime/06899_BottomSheetScrollView.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6890 = fn(6890);
const memoResult = fn(19).memo(
  module_6890.createBottomSheetScrollableComponent(fn(6678).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
